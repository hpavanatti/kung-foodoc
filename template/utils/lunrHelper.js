/**
 * @module lunrHelper
 * @summary Builds the client-side Lunr.js search index at documentation generation time.
 *
 * The search feature works in two phases:
 *
 * **Build time** (this module):
 *  - As each page-level doclet is rendered, `add(doclet, html)` extracts
 *    searchable text (title, longname, summary, description, body text) and
 *    stores it alongside an id (the doclet's URL).
 *  - For classes and namespaces, child members/methods/typedefs are also indexed
 *    so they appear in search results even though they don't have their own page.
 *  - `writeFilesSync()` serializes the Lunr index and the document store to
 *    `lunr-data.json` and `lunr-data.js` (for offline/file:// protocol use).
 *
 * **Runtime** (lunr-search.js in the browser):
 *  - On first search, the JSON is loaded (via AJAX or embedded script tag).
 *  - The pre-built index is loaded into `lunr.Index.load()` -- no client-side
 *    indexing needed, which keeps search fast even for large codebases.
 *  - Results are looked up in the store by ref id.
 *
 * Field boost weights (higher = more influence on ranking):
 *  - longname: 1000, name: 500, tags: 300, kind: 110, title: 100,
 *    summary: 70, description: 50, body: 1 (default)
 *
 * @see module:template - calls writeFilesSync() during publish()
 */
const lunr = require('lunr')
const cheerio = require('cheerio')
const template = require('./template')
const sanitizeHtml = require('sanitize-html')
const path = require('jsdoc/path')
const fs = require('jsdoc/fs')
const helper = require('jsdoc/util/templateHelper')

/** Document store keyed by URL -- shipped to the client for result display. */
const store = exports.store = {}
/** In-memory document array fed to Lunr's indexer during writeFilesSync(). */
const documents = []

/** Strips all HTML tags and collapses whitespace for plain-text indexing. */
const sanitize = function (html) {
  if (typeof html !== 'string') return undefined
  return sanitizeHtml(html, { allowedTags: [], allowedAttributes: [] }).replace(/\s+/g, ' ').trim()
}

/**
 * Recursively generates search-friendly variations of a dotted longname.
 * For `A.B.C` produces: `"A.B.C B.C C"` so partial matches work.
 * Also handles instance members (# separator): `Foo#bar` adds `bar`.
 */
const _variations = function (parts) {
  const result = []
  result.push(parts.join('.'))
  if (parts.length > 1) {
    parts.shift()
    result.push(_variations(parts))
  } else if (parts.length === 1) {
    const instance = parts[0].indexOf('#')
    if (instance !== -1) {
      result.push(parts[0].substr(instance + 1))
    }
  }
  return result.join(' ')
}

const variations = function (longname) {
  if (typeof longname !== 'string' || longname === '') return ''
  return _variations(longname.split('.'))
}

const tags = function (doclet) {
  const result = []
  if (doclet.longname && doclet.longname !== '') {
    result.push(variations(doclet.longname))
  }
  return result.join(' ')
}

const parseBody = function (html) {
  if (!html || typeof html !== 'string') return
  const $ = cheerio.load(html)
  return $('#main').text().replace(/\s+/g, ' ').trim()
}

/**
 * Indexes a doclet for search. Extracts all searchable fields and adds them
 * to the document store. For classes and namespaces, also recursively indexes
 * child members, methods, and typedefs so they appear in search results.
 *
 * @param {Object} doclet - The enriched doclet to index.
 * @param {string} [html] - The rendered HTML page (body text is extracted via Cheerio).
 */
const add = exports.add = function (doclet, html) {
  const id = helper.longnameToUrl[doclet.longname]
  const doc = {
    id,
    kind: doclet.kind,
    title: doclet.pageTitle,
    longname: doclet.longname,
    name: doclet.name,
    tags: tags(doclet),
    summary: sanitize(helper.resolveLinks(doclet.summary)),
    description: sanitize(helper.resolveLinks(doclet.classdesc || doclet.description)),
    body: parseBody(html)
  }
  store[id] = doc
  documents.push(doc)
  if (doclet.kind === 'class' || doclet.kind === 'namespace') {
    doclet.symbols.member.forEach(function (member) {
      add(member)
    })
    doclet.symbols.function.forEach(function (fn) {
      add(fn)
    })
    doclet.symbols.typedef.forEach(function (typedef) {
      add(typedef)
    })
  }
}

/**
 * Builds the final Lunr index from all collected documents and writes two files:
 *  - `lunr-data.json` - standard JSON (loaded via AJAX over HTTP)
 *  - `lunr-data.js` - wrapped in `window.lunrData = ...` (used when opened
 *    via file:// protocol where AJAX is blocked by CORS)
 *
 * @param {boolean} pretty - When true, outputs indented JSON for readability.
 */
exports.writeFilesSync = function (pretty) {
  const index = lunr(function () {
    this.field('longname', { boost: 1000 })
    this.field('name', { boost: 500 })
    this.field('tags', { boost: 300 })
    this.field('kind', { boost: 110 })
    this.field('title', { boost: 100 })
    this.field('summary', { boost: 70 })
    this.field('description', { boost: 50 })
    this.field('body')
    this.ref('id')
    const self = this
    documents.forEach(function (doc) {
      self.add(doc)
    })
  })

  const jsonFile = path.join(template.config.dir.output, 'js/lunr-data.json')
  const dataFile = path.join(template.config.dir.output, 'js/lunr-data.js')
  const data = { index, store }
  const json = pretty ? JSON.stringify(data, null, 2) : JSON.stringify(data)
  fs.writeFileSync(jsonFile, json, 'utf8')
  fs.writeFileSync(dataFile, 'window.lunrData = ' + json + ';', 'utf8')
}
