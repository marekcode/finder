module.exports = {
    root: true,
    env: {
        node: true
    },
    globals: {
        Vue: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/essential',
        '@vue/airbnb',
        '@vue/typescript/recommended'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-shadow': ['off'],
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        '@typescript-eslint/ban-types': [
            'error',
            {
                types: {
                    Function: false,
                    Object: false
                }
            }
        ],
        'max-len': [
            'error',
            {
                code: 140
            }
        ],
        'no-multiple-empty-lines': [
            'error',
            {
                max: 1
            }
        ],
        '@typescript-eslint/object-curly-spacing': ['error', 'always'],
        'array-bracket-spacing': ['error'],
        'no-empty': 'error',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': 'error',
        eqeqeq: ['error'],
        '@typescript-eslint/explicit-function-return-type': ['warn'],
        camelcase: ['error'],
        '@typescript-eslint/no-empty-function': ['error'],
        '@typescript-eslint/no-unused-vars': ['warn'],
        '@typescript-eslint/ban-ts-comment': ['error'],
        'no-useless-escape': ['error'],
        'no-async-promise-executor': ['error'],
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: ['multiline-const', 'multiline-let', 'multiline-var'], next: '*' }
        ]
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)'
            ],
            env: {
                mocha: true
            }
        }
    ]
}
