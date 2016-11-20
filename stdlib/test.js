'use strict';

const lib = require('./lang.core');
const ast1 = require('../libpepper/ast.1');
const boot1 = require('../libpepper/boot.1');
const boot2 = require('../libpepper/boot.2.js')

const codeAst1 = ast1.call(ast1.lookup('__do'), [
    // var a = [1, 2, 3, 4]
    ast1.call(ast1.lookup('__assign'), [
        ast1.symbol('a', 'var'),
        ast1.call(ast1.lookup('__array'), [
            ast1.literal(1, 'int'),
            ast1.literal(2, 'int'),
            ast1.literal(3, 'int'),
            ast1.literal(4, 'int')
        ])
    ]),
    // a[0] = 10
    ast1.call(ast1.lookup('__assign'), [
        ast1.call(ast1.lookup('__index'), [
            ast1.lookup('a'),
            ast1.literal(0, 'int')
        ]),
        ast1.literal(10, 'int')
    ]),
    // // read(a)
    // ast1.call(ast1.lookup('read'), [
    //     ast1.lookup('a')
    // ]),
    // a = 10 + 20
    // ast1.call(ast1.lookup('__assign'), [
    //     ast1.lookup('a'),
    //     ast1.call(ast1.lookup('__add'), [
    //         ast1.literal(10, 'int'),
    //         ast1.literal(20, 'int')
    //     ])
    // ]),
    // write(a)
    ast1.call(ast1.lookup('write'), [
        ast1.lookup('a')
    ])
])

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
    console.log(err.stack);
}
