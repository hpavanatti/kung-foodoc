const helper = require('jsdoc/util/templateHelper')
const template = require('./template')
const handlebars = require('handlebars')
// require and register the layout helpers for handlebars
require('handlebars-layouts').register(handlebars)
const tmpl = exports.tmpl = require('../tmpl')

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

handlebars.registerHelper('json', function (context, options) {
  try {
    return options.hash.pretty ? JSON.stringify(context, null, 2) : JSON.stringify(context)
  } catch (err) {
    return err.message
  }
})

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

handlebars.registerHelper('type-names', function (type) {
  let result = ''
  if (type && type.names && type.names.length) {
    type.names.forEach(function (name, i) {
      if (i > 0) result += ' | '
      result += '<span class="param-type">' + helper.linkto(name, helper.htmlsafe(name)) + '</span>'
    })
  }
  return new handlebars.SafeString(result)
})

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

handlebars.registerHelper('callout', function (title, classes, options) {
  title = typeof title === 'string' ? title : ''
  classes = typeof classes === 'string' ? classes : 'callout-default'
  let result = '<div class="callout ' + classes + '">'
  result += '<h5>' + title + '</h5>'
  result += options.fn(this)
  return result + '</div>'
})

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
