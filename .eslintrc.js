module.exports = {
    'extends': 'eslint:all',
    'env': {
        'es6': true,
        'node': true,
        'commonjs': true,
    },
    'rules': {
        'arrow-body-style': ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'dot-location': ['error', 'property'],
        'eqeqeq': ['error', 'smart'],
        'func-names': ['error', 'never'],
        'id-length': ['error', {'exceptions': ['i']}],
        'indent': ['error', 4, {'SwitchCase': 1}],
        'linebreak-style': ['error', 'unix'],
        'no-console': ['error', {'allow': ['log']}],
        'no-constant-condition': ['error', {'checkLoops': false}],
        'no-mixed-operators': ['error', {
            'groups': [
                // ['+', '-', '*', '/', '%', '**'],
                ['&', '|', '^', '~', '<<', '>>', '>>>'],
                ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                ['&&', '||'],
                ['in', 'instanceof']
            ],
            'allowSamePrecedence': true
        }],
        'no-unused-vars': ['error', {'args': 'none'}],
        'object-curly-newline': ['error', {'minProperties': 1}],
        'object-shorthand': ['error', 'never'],
        'one-var': ['error', 'never'],
        'operator-linebreak': ['error', 'before'],
        'padded-blocks': ['error', 'never'],
        'quote-props': ['error', 'consistent'],
        'quotes': ['error', 'single'],
        'strict': ['error', 'global'],

        'guard-for-in': 'off',
        'line-comment-position': 'off',
        'no-inline-comments': 'off',
        'no-magic-numbers': 'off',
        'no-underscore-dangle': 'off',
        'prefer-template': 'off',
        'sort-keys': 'off',

        // TODO
        'max-params': 'off',
        'max-statements': 'off',
        'no-shadow': 'off',
        'no-warning-comments': 'off',
        'prefer-reflect': 'off',
    },
};
