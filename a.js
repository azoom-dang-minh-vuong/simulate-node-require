console.log('a:', __dirname, __filename)
const b = require('./utils/b.js')
const now = Date.now()

console.log('now', now)

exports.getNow = () => now
