'use strict';

const ast1 = require('../libpepper/ast.1')
const ast2 = require('../libpepper/ast.2')
const typeInfo = require('../libpepper/type.info')

var jsCodeInput = "\
const readline = require('readline');\

const rl = readline.createInterface({\
    input: process.stdin,\
    output: process.stdout\
});\

rl.question('', (answer) => {\
    __self.set(\'val\', answer)\
    rl.close();\
});\
";

module.exports = (boot) => {
    //　__assign('target', 'source')
    boot.namedModule(
        '__assign', 'const', ast1.code(
            ['target', 'source'], ['out', 'const'], '', ast1.meta(
                (pass, instance) => {
                    instance.accessIn(
                        'target',
                        instance.accessOut('source')
                    );

                    return ast2.nativeOut(
                        {
                            js: (pass, target) => {
                                pass.write('__self.set(\'target\', __self.get(\'source\'))');
                              }
                        },
                        typeInfo.basic('null')
                    );
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    );

    //  write('val')
    boot.namedModule(
        'write', 'const', ast1.code(
            ['val'], ['const'], '', ast1.meta(
                (pass, instance) => {
                    return ast2.nativeOut(
                        {
                            js: (pass, target) => {
                                pass.write('console.log(__self.get(\'val\'))');
                            }
                        },
                        typeInfo.basic('null')
                    );
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    );

    //  read('val')
    boot.namedModule(
        'read', 'const', ast1.code(
            ['val'], ['var'], '', ast1.meta(
                (pass, instance) => {
                    return ast2.nativeOut(
                        {
                          js: (pass, target) => {
                              pass.write(jsCodeInput)
                            }
                        },
                        typeInfo.basic('null')
                    );
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    );
};
