'use strict';

const ast1 = require('../libpepper/ast.1')
const ast2 = require('../libpepper/ast.2')
const typeInfo = require('../libpepper/type.info')
const typeCheck = require('../libpepper/type.check')

module.exports = (boot) => {
    //  __do(...)
    boot.namedModule(
        '__do', 'const', ast1.code(
            [], [], 'const', ast1.meta(
                (pass, instance) => {
                    return ast2.nativeOut(
                        {
                            js: (pass, target) => {
                                // nothing
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
                                pass.continuation(
                                    (returnId) => {
                                        pass.write(
                                        "const readline = require('readline');" +
                                            "const rl = readline.createInterface({" +
                                            "    input: process.stdin," +
                                            "    output: process.stdout" +
                                            "});" +
                                            "rl.question('', (answer) => {" +
                                            "    __self.set(\'val\', answer);" +
                                            "    rl.close();" +
                                            returnId + "();" +
                                                "})");
                                    },
                                    (returnId) => {
                                    }
                                );
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

    // __add('val1', 'val2')
    boot.namedModule(
        '__add', 'const', ast1.code(
            ['val1', 'val2'], ['const', 'const'], '', ast1.meta(
                (pass, instance) => {
                    let type1 = instance.accessOut('val1');
                    let type2 = instance.accessOut('val2');
                    if (typeCheck.visit(type1, type2) &&
                        typeCheck.visit(type1, typeInfo.basic('int'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') + __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('int')
                        )
                    }
                    else if (typeCheck.visit(type1, type2) &&
                             typeCheck.visit(type1, typeInfo.basic('float'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') + __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('float')
                        )
                    }
                    else {
                        throw Error();
                    }
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    )

    //__subtract(const val1, const val2)
    boot.namedModule(
        '__subtract', 'const', ast1.code(
            ['val1', 'val2'], ['const', 'const'], '', ast1.meta(
                (pass, instance) => {
                    let type1 = instance.accessOut('val1');
                    let type2 = instance.accessOut('val2');
                    if (typeCheck.visit(type1, type2) &&
                        typeCheck.visit(type1, typeInfo.basic('int'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') - __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('int')
                        )
                    }
                    else if (typeCheck.visit(type1, type2) &&
                             typeCheck.visit(type1, typeInfo.basic('float'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') - __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('float')
                        )
                    }
                    else {
                        throw Error();
                    }
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    )

    //__multiply(const val1, const val2)
    boot.namedModule(
        '__multiply', 'const', ast1.code(
            ['val1', 'val2'], ['const', 'const'], '', ast1.meta(
                (pass, instance) => {
                    let type1 = instance.accessOut('val1');
                    let type2 = instance.accessOut('val2');
                    if (typeCheck.visit(type1, type2) &&
                        typeCheck.visit(type1, typeInfo.basic('int'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') * __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('int')
                        )
                    }
                    else if (typeCheck.visit(type1, type2) &&
                             typeCheck.visit(type1, typeInfo.basic('float'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') * __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('float')
                        )
                    }
                    else {
                        throw Error();
                    }
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    )

    //__divide(const val1, const val2)
    boot.namedModule(
        '__divide', 'const', ast1.code(
            ['val1', 'val2'], ['const', 'const'], '', ast1.meta(
                (pass, instance) => {
                    let type1 = instance.accessOut('val1');
                    let type2 = instance.accessOut('val2');
                    if (typeCheck.visit(type1, type2) &&
                        typeCheck.visit(type1, typeInfo.basic('int'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') / __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('int')
                        )
                    }
                    else if (typeCheck.visit(type1, type2) &&
                             typeCheck.visit(type1, typeInfo.basic('float'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') / __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('float')
                        )
                    }
                    else {
                        throw Error();
                    }
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    )

    // __less('val1', 'val2')
    boot.namedModule(
        '__less', 'const', ast1.code(
            ['val1', 'val2'], ['const', 'const'], '', ast1.meta(
                (pass, instance) => {
                    let type1 = instance.accessOut('val1');
                    let type2 = instance.accessOut('val2');
                    if (typeCheck.visit(type1, type2) &&
                        typeCheck.visit(type1, typeInfo.basic('int'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') < __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('boolean')
                        )
                    }
                    else if (typeCheck.visit(type1, type2) &&
                             typeCheck.visit(type1, typeInfo.basic('float'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') < __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('boolean')
                        )
                    }
                    else {
                        throw Error();
                    }
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    )

    // __lessEqual('val1', 'val2')
    boot.namedModule(
        '__lessEqual', 'const', ast1.code(
            ['val1', 'val2'], ['const', 'const'], '', ast1.meta(
                (pass, instance) => {
                    let type1 = instance.accessOut('val1');
                    let type2 = instance.accessOut('val2');
                    if (typeCheck.visit(type1, type2) &&
                        typeCheck.visit(type1, typeInfo.basic('int'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') <= __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('boolean')
                        )
                    }
                    else if (typeCheck.visit(type1, type2) &&
                             typeCheck.visit(type1, typeInfo.basic('float'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') <= __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('boolean')
                        )
                    }
                    else {
                        throw Error();
                    }
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    )

    // __greater('val1', 'val2')
    boot.namedModule(
        '__greater', 'const', ast1.code(
            ['val1', 'val2'], ['const', 'const'], '', ast1.meta(
                (pass, instance) => {
                    let type1 = instance.accessOut('val1');
                    let type2 = instance.accessOut('val2');
                    if (typeCheck.visit(type1, type2) &&
                        typeCheck.visit(type1, typeInfo.basic('int'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') > __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('boolean')
                        )
                    }
                    else if (typeCheck.visit(type1, type2) &&
                             typeCheck.visit(type1, typeInfo.basic('float'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') > __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('boolean')
                        )
                    }
                    else {
                        throw Error();
                    }
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    )

    // __greaterEqual('val1', 'val2')
    boot.namedModule(
        '__greaterEqual', 'const', ast1.code(
            ['val1', 'val2'], ['const', 'const'], '', ast1.meta(
                (pass, instance) => {
                    let type1 = instance.accessOut('val1');
                    let type2 = instance.accessOut('val2');
                    if (typeCheck.visit(type1, type2) &&
                        typeCheck.visit(type1, typeInfo.basic('int'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') >= __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('boolean')
                        )
                    }
                    else if (typeCheck.visit(type1, type2) &&
                             typeCheck.visit(type1, typeInfo.basic('float'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') >= __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('boolean')
                        )
                    }
                    else {
                        throw Error();
                    }
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    )

    // __equal('val1', 'val2')
    boot.namedModule(
        '__equal', 'const', ast1.code(
            ['val1', 'val2'], ['const', 'const'], '', ast1.meta(
                (pass, instance) => {
                    let type1 = instance.accessOut('val1');
                    let type2 = instance.accessOut('val2');
                    if (typeCheck.visit(type1, type2) &&
                        typeCheck.visit(type1, typeInfo.basic('int'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') === __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('boolean')
                        )
                    }
                    else if (typeCheck.visit(type1, type2) &&
                             typeCheck.visit(type1, typeInfo.basic('float'))) {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.write(target('__self.get(\'val1\') === __self.get(\'val2\')'));
                                }
                            },
                            typeInfo.basic('boolean')
                        )
                    }
                    else {
                        throw Error();
                    }
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    )

    // __positive('val')
    boot.namedModule(
        '__positive', 'const', ast1.code(
            ['val'], ['const'], '', ast1.meta(
                (pass, instance) => {
                    return ast2.nativeOut(
                        {
                            js: (pass, target) => {
                                pass.write(target('+__self.get(\'val\')'));
                            }
                        },
                        instance.accessOut('val')
                    )
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    )

    // __negative('val')
    boot.namedModule(
        '__negative', 'const', ast1.code(
            ['val'], ['const'], '', ast1.meta(
                (pass, instance) => {
                    return ast2.nativeOut(
                        {
                            js: (pass, target) => {
                                pass.write(target('-__self.get(\'val\')'));
                            }
                        },
                        instance.accessOut('val')
                    )
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    )
    // __array(...)
    boot.namedModule(
        '__array', 'const', ast1.code(
            [], [], 'const', ast1.meta(
                (pass, instance) => {
                    return ast2.nativeOut(
                        {
                            js: (pass, target) => {
                                var output = "[";
                                for(var i = 0; instance.types['__argument_'+i]; i++) {
                                    output += "__self.get('__argument_" + i + "'),";
                                }
                                output += "]";
                                pass.write(target(output));
                            }
                        },
                        // typeInfo.array(typeInfo.basic('int'))
                        typeInfo.array(instance.accessOut('__argument_0'))
                    )
                },
                (pass, instance, type) => {
                    throw Error();
                }
            )
        )
    )

    // __index('container', 'index')
    boot.namedModule(
        '__index', 'const', ast1.code(
            ['container', 'index'], ['const', 'const'], '', ast1.meta(
                (pass, instance) => {
                    if (instance.accessOut('container').__type === 'array'
                        ) {
                            return ast2.nativeOut(
                                {
                                    js: (pass, target) => {
                                        pass.write(target(
                                            "__self.get('container')"
                                            + "[__self.get('index')]"
                                        ));
                                    }
                                },
                                typeInfo.basic('int')
                            )
                    }
                    else {
                        throw Error();
                    }
                },
                (pass, instance, type) => {
                    if (instance.accessOut('container').__type === 'array'
                        && typeCheck.visit(instance.accessOut('container').type, type)) {
                            return ast2.nativeIn(
                                {
                                    js: (pass, value) => {
                                        pass.write(
                                            "__self.get('container')"
                                            + "[__self.get('index')] = " + value
                                        );
                                    }
                                },
                                typeInfo.basic('null')
                            )
                    }
                    else {
                        throw Error();
                    }
                }
            )
        )
    )

    // __if('cond', 'body')
    boot.namedModule(
        '__if', 'const', ast1.code(
            ['cond', 'body'], ['const', 'const'], '',
            ast1.call(ast1.lookup('__do'), [
                // const c = cond()
                ast1.call(ast1.lookup('__assign'), [
                    ast1.symbol('c', 'const'),
                    ast1.call(ast1.lookup('cond'), [])
                ]),
                ast1.meta(
                    (pass, instance) => {
                        return ast2.nativeOut(
                            {
                                js: (pass, target) => {
                                    pass.writeRaw('    if (!__self.get("c")) {');
                                    pass.writeRaw('        __self.__func = null;');
                                    pass.writeRaw('        __self.__caller.__func();');
                                    pass.writeRaw('    }');
                                }
                            }
                        )
                    },
                    (pass, instance, type) => {
                        throw Error();
                    }
                ),
                // body()
                ast1.call(ast1.lookup('body'), []),
            ])
        )
    )
};
