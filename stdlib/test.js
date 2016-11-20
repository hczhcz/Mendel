'use strict';

const fs = require('fs');
const process = require('process');
const util = require('util');

const parser = require('./parser.js');
const lib = require('./lang.core');
const typeinfo = require('./libpepper/type.info');
const type2c = require('./libpepper/type.2.c');
const ast1 = require('./libpepper/ast.1');
const ast2 = require('./libpepper/ast.2');
const boot1 = require('./libpepper/boot.1');
const boot2js = require('./libpepper/boot.2.js');
const boot2c = require('./libpepper/boot.2.c');

const ast = parser.parse(process.argv[2]);
console.log(util.inspect(ast, {showHidden: false, depth: null} ));

const b1 = boot1();
const b2js = boot2js();
const b2c = boot2c();

lib(b1);

const instance = b1.execModule(ast);

const m2js = b2js.collect(instance, b1.exports);
fs.writeFile(
    'test_gen.js',
    b2js.render() + m2js,
    (err) => {
        //
    }
);
