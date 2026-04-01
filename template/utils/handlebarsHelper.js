/**
 * @module handlebarsHelper
 * @summary Bridges the JSDoc data model and the Handlebars template layer.
 *
 * This module is the rendering entry-point for FooDoc. It:
 *  1. Loads and registers all Handlebars helpers used in the .hbs templates.
 *  2. Loads the precompiled templates from `tmpl.js` (built by Grunt).
 *  3. Exposes a `render(doclet)` function consumed by `template.generateDocs()`.
 *
 * Helpers fall into three groups:
 *  - **Rendering helpers** (`symbol`, `json`, `linkto`, `type-names`, `param-attribs`)
 *    used across many templates for general-purpose rendering.
 *  - **Detail row helpers** (`detail-type`, `detail-text`, `detail-link`, `detail-link-list`,
 *    `detail-text-list`, `detail-source`) that produce the Bootstrap form rows inside
 *    `tag/_details.hbs`. These replaced 250 lines of repetitive markup with one-liner calls.
 *  - **Layout helpers** (`callout`, `single`, `symbol-kinds`) that control page structure
 *    in `site/_layout.hbs` and the callout wrappers.
 *
 * @see module:template  - orchestrates config, data, and publishing
 * @see module:postProcessor - enriches doclets before rendering
 */
const helper = require('jsdoc/util/templateHelper')
const template = require('./template')
const handlebars = require('handlebars')
// handlebars-layouts provides {{#extend}}, {{#block}}, and {{#content}} helpers
// used by _layout.hbs and its child templates for template inheritance
require('handlebars-layouts').register(handlebars)
const tmpl = exports.tmpl = require('../tmpl')

/**
 * @summary Renders a single doclet to HTML using the precompiled Handlebars template
 * that matches the doclet's `kind` (e.g. `class`, `module`, `tutorial`).
 *
 * Falls back to `tmpl.doclet` if no kind-specific template exists.
 * The root context passed to every template contains: crumbs, doclet, config, options, navbar.
 *
 * @param {Object} doclet - The enriched JSDoc doclet (post-processed by postProcessor).
 * @param {boolean} resolveLinks - When true, resolves `{@link}` tokens in the output HTML.
 * @returns {string} The rendered HTML page.
 */
exports.render = function (doclet, resolveLinks) {
  let tmp = tmpl.doclet
  if (tmpl[doclet.kind]) {
    tmp = tmpl[doclet.kind]
  }
  let html = tmp({
    crumbs: template.createCrumbs(doclet),
    doclet,
    config: template.config,
    options: template.options,
    navbar: template.navbar
  })
  if (resolveLinks) {
    html = helper.resolveLinks(html)
  }
  return html
}

/**
 * Serializes a value to JSON. Used in debug mode to dump config/doclet state.
 * Accepts `pretty=true` hash param for indented output.
 * @example {{json config pretty=true}}
 */
handlebars.registerHelper('json', function (context, options) {
  try {
    return options.hash.pretty ? JSON.stringify(context, null, 2) : JSON.stringify(context)
  } catch (err) {
    return err.message
  }
})

/**
 * Renders a single symbol (class member, method, event, etc.) by selecting the
 * appropriate sub-template based on the doclet's `kind`.
 *
 * Resolution order:
 *  1. `symbol/<kind>` if a kind-specific template exists (e.g. `symbol/tutorial`)
 *  2. `symbol/page` for page-level kinds when not rendering as primary
 *  3. `symbol/inline` (default) for members, functions, events, typedefs
 *
 * Special case: classes rendered as `primary=true` use the `function` template
 * so the constructor signature is shown inline.
 *
 * @example {{symbol this options=@root.options}}
 */
handlebars.registerHelper('symbol', function (doclet, options) {
  let result = ''; let kind = doclet.kind
  if (kind === 'class' && options.hash.primary) {
    kind = 'function'
  }
  if (tmpl['symbol/' + kind]) {
    result = tmpl['symbol/' + kind](doclet, { data: options.hash })
  } else if (template.kinds.pages.indexOf(kind) !== -1 && !options.hash.primary) {
    result = tmpl['symbol/page'](doclet, { data: options.hash })
  } else {
    result = tmpl['symbol/inline'](doclet, { data: options.hash })
  }
  return new handlebars.SafeString(result)
})

/**
 * Converts a JSDoc type object ({names: ['string', 'number']}) to HTML spans
 * with linkto resolution, joined by ` | `. Shared by the `type-names` helper
 * and the `detail-type` helper to avoid duplication.
 * @param {Object} type - JSDoc type descriptor with a `names` array.
 * @returns {string} HTML string of linked type names.
 */
function renderTypeNames (type) {
  let result = ''
  if (type && type.names && type.names.length) {
    type.names.forEach(function (name, i) {
      if (i > 0) result += ' | '
      result += '<span class="param-type">' + helper.linkto(name, helper.htmlsafe(name)) + '</span>'
    })
  }
  return result
}

handlebars.registerHelper('type-names', function (type) {
  return new handlebars.SafeString(renderTypeNames(type))
})

/**
 * Renders parameter attributes (optional, nullable, repeatable) as HTML badges.
 * Used in `tag/_param.hbs` and `tag/_prop.hbs` table cells.
 * @example {{param-attribs this}}
 */
handlebars.registerHelper('param-attribs', function (param) {
  let result = ''
  if (param) {
    if (param.optional) {
      result += '&lt;optional&gt;<br/>'
    }
    if (param.nullable) {
      result += '&lt;nullable&gt;<br/>'
    }
    if (param.variable) {
      result += '&lt;repeatable&gt;<br/>'
    }
  }
  return new handlebars.SafeString(result)
})

/**
 * Block helper that wraps content in a Bootstrap-like callout panel with an
 * auto-resolved Phosphor icon based on the title.
 *
 * @example {{#callout "Parameters" "callout-info"}}...{{/callout}}
 */
handlebars.registerHelper('callout', function (title, classes, options) {
  title = typeof title === 'string' ? title : ''
  classes = typeof classes === 'string' ? classes : 'callout-default'
  var iconMap = {
    'Description': 'ph-text-align-left',
    'Parameters': 'ph-sliders',
    'Returns': 'ph-arrow-bend-up-right',
    'Throws': 'ph-warning',
    'Fires': 'ph-lightning',
    'Requires': 'ph-link',
    'Examples': 'ph-code',
    'Details': 'ph-info',
    'Properties': 'ph-list-dashes'
  }
  var icon = iconMap[title] ? '<i class="ph ' + iconMap[title] + '"></i> ' : ''
  let result = '<div class="callout ' + classes + '">'
  result += '<h5>' + icon + title + '</h5>'
  result += options.fn(this)
  return result + '</div>'
})

/**
 * Block helper with inverse. If the array has exactly one element, renders the
 * main block with that element as context. Otherwise renders the inverse block
 * (typically an `{{#each}}` list). Returns empty string for null/empty arrays.
 *
 * @example
 * {{#single items}}
 *   <p>{{this}}</p>
 * {{else}}
 *   <ul>{{#each items}}<li>{{this}}</li>{{/each}}</ul>
 * {{/single}}
 */
handlebars.registerHelper('single', function (array, options) {
  if (!array || !array.length) return ''
  if (array.length === 1) {
    return options.fn(array[0])
  }
  return options.inverse(this)
})

handlebars.registerHelper('linkto', function (longname) {
  return new handlebars.SafeString(template.linkto(longname))
})

// ---------------------------------------------------------------------------
// Detail row helpers for tag/_details.hbs
//
// Each helper renders a single Bootstrap form row (`<div class="row mb-2">`)
// inside the Details callout. They return empty string when the field is falsy,
// so the template can call them unconditionally for every possible detail field.
//
// Before this refactor, _details.hbs had ~250 lines of near-identical blocks.
// Now it's ~20 lines of helper calls that delegate to these functions.
// ---------------------------------------------------------------------------

/** Wraps label + content in a Bootstrap horizontal form row. */
function detailRow (label, content) {
  return '<div class="row mb-2"><label class="col-sm-3 col-form-label">' + label + '</label><div class="col-sm-9">' + content + '</div></div>'
}

/** Renders an array of longnames as a single `<p>` or `<ul>` of linkto links. */
function renderLinkList (items) {
  if (items.length === 1) {
    return '<p class="form-control-plaintext">' + template.linkto(items[0]) + '</p>'
  }
  let html = '<ul class="form-control-plaintext">'
  items.forEach(function (item) { html += '<li>' + template.linkto(item) + '</li>' })
  return html + '</ul>'
}

/** Renders an array of plain-text values as a single `<p>` or `<ul>`, HTML-escaped. */
function renderTextList (items) {
  if (items.length === 1) {
    return '<p class="form-control-plaintext">' + handlebars.Utils.escapeExpression(items[0]) + '</p>'
  }
  let html = '<ul class="form-control-plaintext">'
  items.forEach(function (item) { html += '<li>' + handlebars.Utils.escapeExpression(item) + '</li>' })
  return html + '</ul>'
}

handlebars.registerHelper('detail-type', function (type) {
  if (!type) return ''
  return new handlebars.SafeString(
    detailRow('Type', '<div class="form-control-plaintext type-names">' + renderTypeNames(type) + '</div>')
  )
})

handlebars.registerHelper('detail-text', function (value, label) {
  if (!value) return ''
  return new handlebars.SafeString(
    detailRow(label, '<p class="form-control-plaintext">' + handlebars.Utils.escapeExpression(value) + '</p>')
  )
})

handlebars.registerHelper('detail-link', function (value, label) {
  if (!value) return ''
  return new handlebars.SafeString(
    detailRow(label, '<p class="form-control-plaintext">' + template.linkto(value) + '</p>')
  )
})

handlebars.registerHelper('detail-link-list', function (items, label) {
  if (!items || !items.length) return ''
  return new handlebars.SafeString(detailRow(label, renderLinkList(items)))
})

handlebars.registerHelper('detail-text-list', function (items, label) {
  if (!items || !items.length) return ''
  return new handlebars.SafeString(detailRow(label, renderTextList(items)))
})

handlebars.registerHelper('detail-source', function (hasSource, opts, source, sourcelink) {
  if (!hasSource) return ''
  var content = opts && opts.outputSourceFiles ? sourcelink : handlebars.Utils.escapeExpression(source)
  return new handlebars.SafeString(
    detailRow('Source', '<p class="form-control-plaintext">' + content + '</p>')
  )
})

// ---------------------------------------------------------------------------
// Symbol sections helper for site/_layout.hbs
//
// The layout used to have 9 near-identical {{#if}}/{{#each}} blocks (one per
// symbol kind). This helper returns only the kinds that have items, so the
// template can iterate with a single {{#each (symbol-kinds doclet.symbols)}}.
// ---------------------------------------------------------------------------

/**
 * Ordered mapping of symbol kinds to their Phosphor icon class and display title.
 * The order here determines the section order on every documentation page.
 */
var SYMBOL_KINDS = [
  { key: 'module', icon: 'ph-package', title: 'Modules' },
  { key: 'class', icon: 'ph-cube', title: 'Classes' },
  { key: 'mixin', icon: 'ph-intersect', title: 'Mixins' },
  { key: 'namespace', icon: 'ph-folder-open', title: 'Namespaces' },
  { key: 'member', icon: 'ph-hash', title: 'Members' },
  { key: 'function', icon: 'ph-function', title: 'Methods' },
  { key: 'typedef', icon: 'ph-textbox', title: 'Type Definitions' },
  { key: 'event', icon: 'ph-lightning', title: 'Events' },
  { key: 'tutorial', icon: 'ph-book-open', title: 'Tutorials' }
]

/**
 * Returns an array of {icon, title, items} for each symbol kind that has at
 * least one member. Used as a subexpression in _layout.hbs:
 * @example {{#each (symbol-kinds doclet.symbols)}} ... {{/each}}
 */
handlebars.registerHelper('symbol-kinds', function (symbols) {
  if (!symbols) return []
  return SYMBOL_KINDS
    .filter(function (k) { return symbols[k.key] && symbols[k.key].length })
    .map(function (k) { return { icon: k.icon, title: k.title, items: symbols[k.key] } })
})
