const fs = require('fs');
const util = require('util');

const parser = require('./pepper.peg.js');

module.exports = {
    parse: (fileName) => {
        if (!fileName) {
            throw "File name "+fileName+" invalid!";
        }
        console.error('Read from file '+fileName);
        let src = fs.readFileSync(fileName, {'encoding':'utf-8'});

        let t;
        try {
            t = parser.parse(src);
            console.error('Parse successfully');
        } catch(e) {
            console.error(e);
            let start = e.location.start;
            let end = e.location.end;
            console.error(util.format('%d:%d-%d:%d: %s', start.line, start.column, end.line, end.column, e.message));
        }

        return t;
    },
}
