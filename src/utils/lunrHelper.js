const lunr = require('lunr')
const cheerio = require('cheerio')
const template = require('./template')
const sanitizeHtml = require('sanitize-html')
const path = require('jsdoc/path')
const fs = require('jsdoc/fs')
const helper = require('jsdoc/util/templateHelper')

const store = exports.store = {}
const documents = []

const sanitize = function (html) {
  if (typeof html !== 'string') return undefined
  return sanitizeHtml(html, { allowedTags: [], allowedAttributes: [] }).replace(/\s+/g, ' ').trim()
}

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
