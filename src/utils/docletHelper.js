/**
 * @module docletHelper
 * @summary Computes display-ready fields for each JSDoc doclet.
 *
 * This module is called by `postProcessor.process()` during the post-processing
 * phase. For every doclet in the database, it computes:
 *
 *  - **Titles** (page, symbol, list, primary) in both sanitized (plain text for
 *    `<title>`) and HTML forms, including ancestor chains and signature markup.
 *  - **Signatures** with optional/variadic parameter rendering and return types.
 *  - **Parameters & Properties** sorted into nested trees (for dot-notation like
 *    `options.foo.bar`) with column-presence flags (hasNames, hasAttributes, hasDefaults).
 *  - **Examples** parsed for inner tags ({@caption}, {@lang}, {@run}).
 *  - **Fires / Requires** expanded from longname arrays to {link, summary} objects.
 *  - **Symbols** grouped by kind for the secondary section of each page.
 *  - **Access filter** visibility (inherited, public, protected, private).
 *  - **hasDetails** flag indicating whether the Details callout should render.
 *
 * All exported functions are pure transforms: they read the doclet and return
 * computed values without side effects on the doclet itself.
 */
const template = require('./template')
const helper = require('jsdoc/util/templateHelper')
const markdown = require('jsdoc/util/markdown').getParser()

/** Returns true if the doclet kind supports parameter signatures (functions, classes, function typedefs). */
const supportsParams = function (doclet) {
  return doclet.kind === 'function' || doclet.kind === 'class' || (doclet.kind === 'typedef' && !!doclet.type && !!doclet.type.names && doclet.type.names.some(function (name) {
    return name.toLowerCase() === 'function'
  }))
}

/**
 * Derives the display text for a doclet's link. Strips prefixes like `module:`
 * and `event:` for cleaner navigation labels. Tutorials and readmes use their
 * `title` or `name` property directly.
 */
const getLinkText = exports.getLinkText = function (doclet) {
  let text = doclet.longname
  if (['class', 'module', 'namespace', 'mixin', 'interface', 'event'].indexOf(doclet.kind) !== -1) {
    text = text.replace('module:', '')
    if (doclet.kind === 'event') {
      text = text.replace('event:', '')
    }
    if (doclet.kind === 'module') {
      text = text.split('>').pop()
    }
  } else if (doclet.kind === 'external') {
    text = doclet.name.replace(/(^"|"$)/g, '')
  } else if (doclet.kind === 'tutorial' || doclet.kind === 'readme' || doclet.kind === 'list') {
    text = doclet.title || doclet.name
  }
  return text
}

/** Returns HTML-safe attribute badges (e.g. `<static>`, `<readonly>`) for the doclet. */
exports.getAttribs = function (doclet) {
  if (supportsParams(doclet) || doclet.kind === 'member' || doclet.kind === 'constant') {
    const attribs = helper.getAttribs(doclet)
    return attribs.length ? '<span class="signature-attribs">' + helper.htmlsafe('<' + attribs.join(', ') + '> ') + '</span>' : ''
  }
  return ''
}

/**
 * Builds the HTML signature string for a doclet.
 * For functions/classes: `( param1 [, optionalParam ] ) -> {ReturnType}`
 * For members/constants: ` :TypeName`
 * Optional params are wrapped in brackets with correct nesting.
 */
exports.getSignature = function (doclet) {
  let signature = ''
  if (supportsParams(doclet)) {
    signature += '<span class="signature-params">('
    if (doclet.params && doclet.params.length) {
      signature += ' '

      const optionalClose = []
      doclet.params.forEach(function (p, i) {
        if (p.name && p.name.indexOf('.') === -1) {
          if (!p.optional && optionalClose.length) {
            signature += optionalClose.pop()
          }
          const name = '<span class="signature-param">' + (p.variable ? '...' + p.name : p.name) + '</span>'
          const separator = i > 0 ? (p.optional ? ' [,&nbsp;' : ', ') : (p.optional ? '[&nbsp;' : '')
          signature += separator + name
          if (p.optional) optionalClose.push('&nbsp;]')
        }
      })

      signature += optionalClose.join('') + '&nbsp;'
    }
    signature += ')</span>'
    if (template.options.methodHeadingReturns) {
      const returnTypes = helper.getSignatureReturns(doclet)
      signature += '<span class="signature-type">' + (returnTypes.length ? ' &rarr;&nbsp;{' + returnTypes.join('|') + '}' : '') + '</span>'
    }
  } else if (doclet.kind === 'member' || doclet.kind === 'constant') {
    const types = helper.getSignatureTypes(doclet)
    signature += '<span class="signature-type">' + (types.length ? ' :' + types.join('|') : '') + '</span>'
    // todo: check if this is required
    // doclet.kind = 'member';
  }
  return signature
}

/**
 * Parses the `@example` tags into structured objects with extracted inner tags:
 *  - `{@caption <markdown>}` - rendered description above the code block
 *  - `{@lang <string>}` - Prism.js language for syntax highlighting (default: javascript)
 *  - `{@run <boolean>}` - enables the "Run" button for executable examples
 *
 * Also supports the legacy `<caption>` HTML syntax.
 * @returns {Array<{caption: string, code: string, lang: string, run: boolean}>}
 */
exports.getExamples = function (doclet) {
  if (!doclet.examples || !doclet.examples.length) return []
  return doclet.examples.map(function (example) {
    // perform parsing of the example content to extract custom inner tags
    // create a new example object to return as the result of the mapping
    const result = {
      caption: '',
      code: '',
      lang: 'javascript',
      run: false
    }

    // parse caption supplied using the default <caption></caption> syntax
    if (example.match(/^\s*?<caption>([\s\S]+?)<\/caption>(\s*)([\s\S]+?)$/i)) {
      example = RegExp.$3
      result.caption = markdown(RegExp.$1)
    }

    // parse caption supplied using the {@caption <markdown>} inner tag
    const caption = /^\s*?\{@caption\s(.*?)}\s*?/.exec(example)
    if (caption && caption[1]) {
      example = example.replace(caption[0], '')
      result.caption = markdown(caption[1]) // parse markdown and set result value
    }
    // parse lang supplied using the {@lang <string>} inner tag, this should be a prism.js supported language to get syntax highlighting.
    const lang = /\s*?\{@lang\s(.*?)}\s*?/.exec(example)
    if (lang && lang[1]) {
      example = example.replace(lang[0], '')
      result.lang = lang[1]
    }
    // parse run supplied using the {@run <boolean>} inner tag, this allows the example to be executed with any console.log calls being piped into a textarea.
    // NOTE: if lang !== 'javascript' the {@run} inner tag is simply removed from the example code, we only support running javascript.
    const run = /\s*?\{@run\s(.*?)}\s*?/.exec(example)
    if (run && run[1]) {
      example = example.replace(run[0], '')
      // if the run tag is supplied it is always true regardless of the value so just test if the lang is javascript and use that value
      result.run = result.lang === 'javascript'
    }
    // the example should now contain just the code
    result.code = example
    return result
  })
}

/**
 * Resolves an array of longnames into {link, summary} objects by looking up
 * each longname in the database. Shortens link text for same-parent members.
 * Any longnames not found in the DB are still included with empty summaries.
 */
const expandLongnames = function (longnames, parent) {
  const results = []
  const generated = template.kinds.pages.indexOf(parent.kind) !== -1
  const memberof = generated ? parent.longname : parent.memberof
  const leftovers = longnames.slice()
  template.find({ longname: longnames }).forEach(function (doclet) {
    let linkText = getLinkText(doclet)
    if (doclet.memberof === memberof) {
      linkText = linkText.split('~').pop()
    }
    leftovers.splice(leftovers.indexOf(doclet.longname), 1)
    results.push({
      link: template.linkto(doclet.longname, linkText),
      summary: doclet.summary
    })
  })
  leftovers.forEach(function (longname) {
    results.push({
      link: template.linkto(longname),
      summary: ''
    })
  })
  return results
}

exports.getFires = function (doclet) {
  if (!doclet.fires) return []
  return expandLongnames(doclet.fires, doclet)
}

exports.getRequires = function (doclet) {
  if (!doclet.requires) return []
  return expandLongnames(doclet.requires, doclet)
}

exports.getSummary = function (doclet) {
  if (!doclet.summary) return ''
  return markdown(doclet.summary)
}

/**
 * Transforms a flat JSDoc params/properties array into a nested tree based on
 * dot-notation names. For example, `options`, `options.foo`, `options.foo.bar`
 * becomes a tree where `options` has a child `foo` which has a child `bar`.
 *
 * @param {Object} doclet - The doclet containing the params/properties.
 * @param {string} type - Either `'params'` or `'properties'`.
 * @returns {Array} The top-level items with nested children.
 */
exports.getParamsOrProps = function (doclet, type) {
  if (!doclet[type] || !doclet[type].length) return []
  const sorted = {}
  sorted[type] = []
  doclet[type].forEach(function (paramOrProp) {
    if (!paramOrProp) { return }
    const parts = paramOrProp.name.split('.'); const last = parts.length - 1; let base = sorted; const parentName = []
    parts.forEach(function (part, i) {
      let index
      if (i === last) {
        paramOrProp.name = paramOrProp.name.replace(parentName.join('.'), '').replace(/^\./, '')
        base[type] = base[type] || []
        base[type].push(paramOrProp)
      } else if ((index = base[type].findIndex(function (p) { return p.name === part })) !== -1) {
        base = base[type][index]
        parentName.push(part)
      }
    })
  })

  return sorted[type].filter(function (paramOrProp) {
    return !!paramOrProp
  })
}

/**
 * Scans a params/properties array and sets boolean flags on the parent doclet
 * indicating which table columns are needed:
 *  - `{type}HasNames` - at least one item has a name
 *  - `{type}HasAttributes` - at least one item is optional, nullable, or variable
 *  - `{type}HasDefaults` - at least one item has a default value
 *
 * Recurses into nested params/properties (from dot-notation expansion).
 */
const checkParamsOrProps = exports.checkParamsOrProps = function (parent, type) {
  if (!parent || !parent[type] || !parent[type].length) return
  /* determine if we need extra columns, "attributes" and "default" */
  parent[type + 'HasAttributes'] = false
  parent[type + 'HasDefaults'] = false
  parent[type + 'HasNames'] = false

  parent[type].forEach(function (paramOrProp) {
    if (!paramOrProp) {
      return
    }
    if (paramOrProp.optional || paramOrProp.nullable || paramOrProp.variable) {
      parent[type + 'HasAttributes'] = true
    }
    if (paramOrProp.name) {
      parent[type + 'HasNames'] = true
    }
    if (typeof paramOrProp.defaultvalue !== 'undefined') {
      parent[type + 'HasDefaults'] = true
    }
    if (paramOrProp[type]) {
      checkParamsOrProps(paramOrProp, type)
    }
  })
}

/**
 * Builds the page-level title HTML (used in `<title>` and the page header).
 * Includes ancestors, name, signature, and variation. When `sanitized` is true,
 * strips all HTML tags for use in `<title>` elements.
 */
exports.getPageTitle = function (doclet, sanitized) {
  const parts = []
  if (doclet.attribs) {
    parts.push(doclet.attribs)
  }
  if (template.kinds.pages.indexOf(doclet.kind) !== -1 && template.kinds.custom.indexOf(doclet.kind) === -1 && doclet.ancestors && doclet.ancestors.length) {
    parts.push('<span class="ancestors">' + doclet.ancestors.join('') + '</span>')
  }
  if (doclet.title) {
    parts.push('<span class="title">' + doclet.title + '</span>')
  } else if (doclet.name) {
    let name = doclet.name
    if (doclet.exported) {
      name = name.replace('module:', '<span class="name-signature">(<span class="name-require">require</span>(<span class="name-string">"') + '"</span>))</span>'
    }
    parts.push('<span class="name">' + name + '</span>')
  }
  if (template.kinds.pages.indexOf(doclet.kind) === -1 && doclet.signature) {
    parts.push(doclet.signature)
  }
  if (doclet.variation) {
    parts.push('<sup class="variation">' + doclet.variation + '</sup>')
  }
  const result = parts.join('')
  return sanitized ? template.sanitize(result) : result
}

/**
 * Builds the title HTML for list pages (navbar dropdowns).
 * Similar to getPageTitle but wraps in a link to the doclet's page when a URL exists.
 */
exports.getListTitle = function (doclet, sanitized) {
  const parts = []; let linkClose = false; const url = doclet.kind === 'tutorial' ? helper.tutorialToUrl(doclet.longname) : helper.longnameToUrl[doclet.longname]
  // only generate links to kinds that have a page generated, others show content inline so there's no need
  if (url) {
    parts.push('<a href="' + url + '">')
    linkClose = true
  }
  if (doclet.kind === 'class') {
    parts.push('<span class="signature-new">new&nbsp;</span>')
  }
  if (doclet.ancestors && doclet.ancestors.length) {
    parts.push('<span class="ancestors">' + template.sanitize(doclet.ancestors.join('')) + '</span>')
  }
  if (doclet.attribs) {
    parts.push(doclet.attribs)
  }
  if (doclet.title) {
    parts.push('<span class="title">' + doclet.title + '</span>')
  } else if (doclet.name) {
    let name = doclet.name
    if (doclet.exported) {
      name = name.replace('module:', '<span class="name-signature">(<span class="name-require">require</span>(<span class="name-string">"') + '"</span>))</span>'
    }
    parts.push('<span class="name">' + name + '</span>')
  }
  if (doclet.signature) {
    parts.push(doclet.signature)
  }
  if (doclet.variation) {
    parts.push('<sup class="variation">' + doclet.variation + '</sup>')
  }
  if (linkClose) {
    parts.push('</a>')
  }
  const result = parts.join('')
  return sanitized ? template.sanitize(result) : result
}

/**
 * Builds the title HTML for inline symbols (methods, members, events).
 * Links to the symbol's own page for page-level kinds; renders inline for others.
 */
exports.getSymbolTitle = function (doclet, sanitized) {
  const parts = []; let linkClose = false; const url = doclet.kind === 'tutorial' ? helper.tutorialToUrl(doclet.longname) : helper.longnameToUrl[doclet.longname]
  // only generate links to kinds that have a page generated, others show content inline so there's no need
  if (template.kinds.pages.indexOf(doclet.kind) !== -1 && url) {
    parts.push('<a href="' + url + '">')
    linkClose = true
  }
  if (doclet.kind === 'class') {
    parts.push('<span class="signature-new">new&nbsp;</span>')
  }
  if (doclet.attribs) {
    parts.push(doclet.attribs)
  }
  if (doclet.title) {
    parts.push('<span class="title">' + doclet.title + '</span>')
  } else if (doclet.name) {
    let name = doclet.name
    if (doclet.exported) {
      name = name.replace('module:', '<span class="name-signature">(<span class="name-require">require</span>(<span class="name-string">"') + '"</span>))</span>'
    }
    parts.push('<span class="name">' + name + '</span>')
  }
  if (doclet.signature) {
    parts.push(doclet.signature)
  }
  if (doclet.variation) {
    parts.push('<sup class="variation">' + doclet.variation + '</sup>')
  }
  if (linkClose) {
    parts.push('</a>')
  }
  const result = parts.join('')
  return sanitized ? template.sanitize(result) : result
}

/**
 * Builds the title HTML for the primary symbol (the main doclet on a page).
 * Similar to getSymbolTitle but never wraps in a link since we're already on that page.
 */
exports.getPrimaryTitle = function (doclet, sanitized) {
  const parts = []
  if (doclet.kind === 'class') {
    parts.push('<span class="signature-new">new&nbsp;</span>')
  }
  if (doclet.attribs) {
    parts.push(doclet.attribs)
  }
  if (doclet.title) {
    parts.push('<span class="title">' + doclet.title + '</span>')
  } else if (doclet.name) {
    let name = doclet.name
    if (doclet.exported) {
      name = name.replace('module:', '<span class="name-signature">(<span class="name-require">require</span>(<span class="name-string">"') + '"</span>))</span>'
    }
    parts.push('<span class="name">' + name + '</span>')
  }
  if (doclet.signature) {
    parts.push(doclet.signature)
  }
  if (doclet.variation) {
    parts.push('<sup class="variation">' + doclet.variation + '</sup>')
  }
  const result = parts.join('')
  return sanitized ? template.sanitize(result) : result
}

/**
 * Groups all child symbols of a doclet by kind (member, function, event, etc.).
 * For global doclets, queries symbols with undefined memberof instead.
 * The returned object is used by `site/_layout.hbs` via the `symbol-kinds` helper.
 */
exports.getSymbols = function (doclet) {
  const symbols = {}
  if (doclet.longname === helper.globalName) {
    template.kinds.global.forEach(function (kind) {
      symbols[kind] = template.find({ kind, memberof: { isUndefined: true } })
    })
  } else {
    template.kinds.symbols.forEach(function (kind) {
      symbols[kind] = template.find({ kind, memberof: doclet.longname })
    })
  }
  return symbols
}

/**
 * Determines whether the access filter toolbar should appear on a doclet page.
 * The filter is shown only when the doclet has symbols in at least 2 different
 * access levels (e.g. both public and private, or inherited and protected).
 * Also populates `doclet.has` with boolean flags for each access level.
 */
exports.getShowAccessFilter = function (doclet) {
  let result = typeof doclet.showAccessFilter !== 'boolean' ? template.options.showAccessFilter : doclet.showAccessFilter
  if (result) {
    // if we can show the filter check if we should actually show it
    doclet.has = {
      inherited: template.find({ kind: template.kinds.symbols, memberof: doclet.longname, inherited: true }).length > 0,
      public: template.find({ kind: template.kinds.symbols, memberof: doclet.longname, access: 'public' }).length > 0,
      protected: template.find({ kind: template.kinds.symbols, memberof: doclet.longname, access: 'protected' }).length > 0,
      private: template.find({ kind: template.kinds.symbols, memberof: doclet.longname, access: 'private' }).length > 0
    }
    const count = (doclet.has.inherited ? 1 : 0) + (doclet.has.public ? 1 : 0) + (doclet.has.protected ? 1 : 0) + (doclet.has.private ? 1 : 0)
    // only show the filter if there are two or more accessors available
    result = count > 1
  }
  return result
}

exports.isInherited = function (doclet) {
  return !!doclet.inherited
}

/**
 * Returns true if the doclet has any metadata that warrants showing the
 * Details callout (version, since, inherits, mixes, deprecated, author,
 * copyright, license, source, tutorials, see, todo, etc.).
 */
exports.hasDetails = function (doclet) {
  return !!(doclet.version ||
    doclet.since ||
    (doclet.inherited && doclet.inherits) ||
    doclet.since ||
    (doclet.implementations && doclet.implementations.length) ||
    (doclet.implements && doclet.implements.length) ||
    (doclet.mixes && doclet.mixes.length) ||
    doclet.deprecated ||
    (doclet.author && doclet.author.length) ||
    doclet.copyright ||
    doclet.license ||
    doclet.defaultvalue ||
    doclet.hasSource ||
    (doclet.tutorials && doclet.tutorials.length) ||
    (doclet.see && doclet.see.length) ||
    (doclet.todo && doclet.todo.length))
}
