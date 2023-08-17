const fs = require('fs')
module.exports = function load(
  exports,
  require,
  module,
  __filename,
  __dirname
) {
  eval(fs.readFileSync(__filename, 'utf8'))
}
