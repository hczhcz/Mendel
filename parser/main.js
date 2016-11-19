const fs = require('fs');
const util = require('util');
const process = require('process');

const parser = require('./parser.js');

console.log('Read from file '+process.argv[2]);
var src = fs.readFileSync(process.argv[2], {'encoding':'utf-8'});

try {
    parser.parse(src);
    console.log('SUCCESS');
} catch(e) {
    let start = e.location.start;
    let end = e.location.end;
    console.log(util.format('%d:%d-%d:%d: %s', start.line, start.column, end.line, end.column, e.message));
}
