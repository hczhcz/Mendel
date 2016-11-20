const process = require('process');
const util = require('util');

const parser = require('./parser.js');

let t = parser.parse(process.argv[2]);
console.error(util.inspect(t, {showHidden: false, depth: null} ));
debugger;

const lib = require('./lang.core');
const ast1 = require('../libpepper/ast.1');
const boot1 = require('../libpepper/boot.1');
const boot2 = require('../libpepper/boot.2.js')

const codeAst1 = t;

const passBoot1 = boot1();
const passBoot2 = boot2();
lib(passBoot1);

try {
    const head = '\'use strict\';\n'
        + '\n'
        + 'let __inner = null;\n'
        + 'let __upper = null;\n'
        + 'let __callee = null;\n'
        + 'let __parent = null;\n'
        + 'let __root = new Map();\n'
        + 'let __self = __root;\n'
        + '\n'
        + '__root.set(\'__do\', __root);\n'
        + '__root.set(\'__assign\', __root);\n'
        + '__root.set(\'__write\', __root);\n'
        + '\n';

    const codeAst2 = passBoot1.module(codeAst1);

    const module2 = passBoot2.module(codeAst2);

    console.log(head + passBoot2.render() + module2);
} catch (err) {
    console.error(err.stack);
}
