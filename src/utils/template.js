const fs = require('jsdoc/fs')
const path = require('jsdoc/path')
const helper = require('jsdoc/util/templateHelper')
const hbs = require('./handlebarsHelper')
const lunr = require('./lunrHelper')
const processor = require('./postProcessor')
const sanitizeHtml = require('sanitize-html')
const extend = require('extend')
const moment = require('moment')

const kinds = exports.kinds = {
  custom: ['readme', 'global', 'source', 'tutorial', 'list'],
  pages: ['readme', 'global', 'source', 'tutorial', 'list', 'class', 'external', 'mixin', 'module', 'namespace', 'interface'],
  symbols: ['tutorial', 'class', 'external', 'event', 'mixin', 'module', 'namespace', 'interface', 'member', 'function', 'constant', 'typedef'],
  global: ['member', 'function', 'constant', 'typedef']
}

const options = exports.options = extend({
  includeDate: true,
  dateFormat: 'Do MMM YYYY',
  systemName: 'FooDoc',
  systemSummary: 'A Bootstrap and Handlebars based template for JSDoc3.',
  systemLogo: '',
  systemColor: '',
  navMembers: [],
  footer: '',
  copyright: 'FooDoc Copyright © 2016 The contributors to the JSDoc3 and FooDoc projects.',
  linenums: true,
  collapseSymbols: true,
  inverseNav: true,
  inlineNav: false,
  outputSourceFiles: true,
  sourceRootPath: null,
  disablePackagePath: true,
  outputSourcePath: false,
  showTableOfContents: true,
  showAccessFilter: true,
  analytics: null,
  methodHeadingReturns: true,
  sort: 'linenum, longname, version, since',
  search: true,
  favicon: null,
  stylesheets: [],
  scripts: []
}, env.conf.templates || {})
if (!options.navMembers.length) {
  options.navMembers = [
    { kind: 'class', title: 'Classes', summary: 'All documented classes.' },
    { kind: 'external', title: 'Externals', summary: 'All documented external members.' },
    { kind: 'global', title: 'Globals', summary: 'All documented globals.' },
    { kind: 'mixin', title: 'Mixins', summary: 'All documented mixins.' },
    { kind: 'interface', title: 'Interfaces', summary: 'All documented interfaces.' },
    { kind: 'module', title: 'Modules', summary: 'All documented modules.' },
    { kind: 'namespace', title: 'Namespaces', summary: 'All documented namespaces.' },
    { kind: 'tutorial', title: 'Tutorials', summary: 'All available tutorials.' }
  ]
}

const faviconTypes = {
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif'
}

const config = exports.config = {
  debug: false,
  raw: env.opts,
  version: env.version.number,
  date: moment().format(options.dateFormat),
  faviconType: options.favicon ? faviconTypes[path.extname(options.favicon)] : null,
  dir: {
    root: null,
    tmpl: null,
    static: null,
    output: env.opts.destination,
    images: path.join(env.opts.destination, 'img'),
    tutorials: env.opts.tutorials
  }
}

const raw = exports.raw = {
  data: null,
  opts: {},
  tutorials: []
}

let configured = false
exports.configure = function (taffyData, opts, tutorials) {
  raw.data = helper.prune(taffyData)
  raw.opts = opts
  raw.tutorials = tutorials
  config.dir.root = opts.templates
  config.dir.tmpl = path.join(opts.template, 'tmpl')
  config.dir.static = path.join(opts.template, 'static')
  configured = true
  return config
}

const navbar = exports.navbar = {}

exports.postProcess = function () {
  processor.registerReadme()
  processor.registerModules()
  processor.registerGlobals()
  processor.registerDoclets()
  processor.registerSources()
  processor.registerTutorials()
  processor.registerLists()
  processor.process()
  processor.buildNavbar(navbar)
}

exports.publish = function () {
  generateStaticFiles()
  generateDocs()
  lunr.writeFilesSync(true)
}

exports.sanitize = function (html) {
  if (typeof html !== 'string') return
  return sanitizeHtml(html, { allowedTags: [], allowedAttributes: [] }).replace(/\s+/g, ' ').trim()
}

/**
 * @summary Find items in the current TaffyDB that match the specified key-value pairs.
 * @param {Object|function} spec - An object of key-value pairs to match against (e.g. `{longname:"foo"}`), or a function that returns `true` if a value matches.
 * @returns {Array.<Object>} The matching items.
 * @example {@caption The following shows supplying an object to perform a by example search against the data.}
 * var foo = helper.find({longname:"foo"}).first(); // get the first doclet with a longname of `foo`
 * var children = helper.find({memberof:"foo"}); // get all doclets which belong to the `foo` doclet.
 */
const find = exports.find = function (spec, sort) {
  if (!configured) return []
  return sort ? raw.data(spec).order(sort).get() : raw.data(spec).get()
}

const linkto = exports.linkto = function (longname, linkText) {
  let text = (linkText || longname) + ''
  // if no linkText was supplied lookup the longname and use the `linkText` property for the doclet.
  if (typeof linkText !== 'string') {
    const found = find({ longname })
    if (found.length && found[0].kind) {
      const doclet = found[0]
      text = doclet.linkText || text
      if (doclet.kind === 'tutorial') {
        return helper.toTutorial(doclet.longname, text, { tag: 'em', classname: 'disabled' })
      }
    }
  }
  return helper.linkto(longname, text)
}

const getPages = exports.getPages = function (sort) {
  const members = {}
  kinds.pages.forEach(function (kind) {
    members[kind] = find({ kind }, sort)
  })
  return members
}

const generateStaticFiles = exports.generateStaticFiles = function () {
  // first copy all files within the templates 'static' directory to the output directory
  const files = fs.ls(config.dir.static, 3)
  files.forEach(function (fileName) {
    const toDir = fs.toDir(fileName.replace(config.dir.static, config.dir.output))
    fs.mkPath(toDir)
    fs.copyFileSync(fileName, toDir)
  })

  // then copy the systemLogo file if one was supplied and update the option with the output file path
  if (options.systemLogo) {
    const logoStats = fs.lstatSync(options.systemLogo)
    if (logoStats.isFile()) {
      fs.mkPath(config.dir.images)
      fs.copyFileSync(options.systemLogo, config.dir.images)
      options.systemLogo = 'img/' + path.basename(options.systemLogo)
    }
  }

  // same for the favicon
  if (options.favicon) {
    const faviconStats = fs.lstatSync(options.favicon)
    if (faviconStats.isFile()) {
      fs.copyFileSync(options.favicon, env.opts.destination, 'favicon' + path.extname(options.favicon))
      options.favicon = 'favicon' + path.extname(options.favicon)
    }
  }

  // then copy all user supplied files
  let userFiles
  if (options.default && (userFiles = options.default.staticFiles)) {
    // The canonical property name is `include`. We accept `paths` for backwards compatibility with a bug in JSDoc 3.2.x.
    const paths = userFiles.include || userFiles.paths || []
    const filter = new (require('jsdoc/src/filter')).Filter(userFiles)
    const scanner = new (require('jsdoc/src/scanner')).Scanner()
    paths.forEach(function (filePath) {
      const files = scanner.scan([filePath], 10, filter)
      files.forEach(function (fileName) {
        const from = fs.toDir(filePath)
        const toDir = fs.toDir(fileName.replace(from, config.dir.output))
        fs.mkPath(toDir)
        fs.copyFileSync(fileName, toDir)
      })
    })
  }
}

const generateDocs = exports.generateDocs = function () {
  const pages = getPages()
  Object.keys(pages).forEach(function (kind) {
    if (pages[kind].length) {
      pages[kind].forEach(function (doclet) {
        const filename = doclet.kind === 'tutorial' ? helper.tutorialToUrl(doclet.longname) : helper.longnameToUrl[doclet.longname]
        if (!filename) return

        if (doclet.kind === 'list' && !doclet.members.length) return

        const output = path.join(config.dir.output, filename)
        const html = hbs.render(doclet, doclet.kind !== 'source')

        if (html === null) return

        fs.writeFileSync(output, html, 'utf8')
        if (doclet.kind !== 'source') {
          lunr.add(doclet, html)
        }
      })
    }
  })
}

const hasNavMember = exports.hasNavMember = function (kind) {
  return options.navMembers.findIndex(function (member) {
    return member.kind === kind
  }) !== -1
}

exports.createCrumbs = function (doclet) {
  const crumbs = []
  if (doclet.kind === 'readme' || doclet.kind === 'source') return crumbs
  crumbs.push(linkto('index', 'Home'))
  if (doclet.kind !== 'list' && doclet.kind !== 'global' && hasNavMember(doclet.kind)) {
    crumbs.push(linkto('list:' + doclet.kind))
  }
  if (doclet.kind === 'tutorial') {
    helper.getAncestors(raw.data, doclet).forEach(function (ancestor) {
      crumbs.push(linkto(ancestor.longname))
    })
    crumbs.push(doclet.title || doclet.name)
  } else {
    crumbs.push(doclet.ancestors.join('') + doclet.name)
  }
  return crumbs
}
