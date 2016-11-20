const process = require('process');
const util = require('util');

const parser = require('./parser.js');

let t = parser.parse(process.argv[2]);
console.error(util.inspect(t, {showHidden: false, depth: null} ));
debugger;

