module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    ignorePatterns:['*.scss','*.js'],
    plugins: ['react', 'react-hooks', '@typescript-eslint', 'eslint-plugin-import', 'prettier'],
    settings:{
        'import/resolver': {
            alias: {
                map: [['~', './src/']],
                extensions: ['.ts', '.js', '.tsx'],
            },
        }
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.jsx', '.tsx'],
            },
        ],
        'react/prop-types': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    overrides: [
        {
            files:["*.test.tsx","*.test.ts","*.test.jsx","*.test.js","style.scss"],
            rules: {
                '@typescript-eslint/no-unsafe-call':'off',
                '@typescript-eslint/no-unsafe-member-access':'off'
            }
        }
    ]
};
