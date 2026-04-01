/**
 * @summary JSDoc template entry point.
 *
 * JSDoc calls `exports.publish()` after parsing all source files. This is the
 * single entry point that delegates to the template module's three-phase pipeline:
 *
 *  1. **configure** - Initializes config, merges options, patches database
 *  2. **postProcess** - Registers all doclets, computes display fields, builds navbar
 *  3. **publish** - Copies static files, renders HTML pages, writes search index
 *
 * @param {Object} taffyData - JSDoc's TaffyDB/Salty database of parsed doclets.
 * @param {Object} opts - Raw JSDoc options (template path, output dir, etc.).
 * @param {Object} tutorials - The tutorial tree parsed from the tutorials directory.
 */
const template = require('./utils/template')
exports.publish = function (taffyData, opts, tutorials) {
  template.configure(taffyData, opts, tutorials)
  template.postProcess()
  template.publish()
}
