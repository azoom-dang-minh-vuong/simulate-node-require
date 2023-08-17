console.log('index:', __dirname, __filename)
const packageJson = require('./package.json')
const a = require('./a.js')
const sample = require('sample')
const sample2 = require('sample2')
const sample22 = require('/Users/minhvuong/Desktop/commonjs/node_modules/sample2')
const path = require('path')

console.log('a.getNow() =', a.getNow())
console.log({
  sample,
  sample2,
  sample22,
  path,
})

exports.a = a
