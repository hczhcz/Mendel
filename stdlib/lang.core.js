'use strict';

const ast1 = require('../libpepper/ast.1')
const ast2 = require('../libpepper/ast.2')
const typeInfo = require('../libpepper/type.info')

module.exports = (boot) => {
    //　assignment
    boot.namedModule(
        '__assign', 'const', ast1.code(
            ['target', 'source'], ['out', 'const'], '',
                ast1.meta(
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
};
