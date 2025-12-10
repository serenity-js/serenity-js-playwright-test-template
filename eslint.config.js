import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import unicorn from 'eslint-plugin-unicorn';

export default tseslint.config(
    // Ignore patterns
    {
        ignores: ['**/lib/**', 'node_modules/**', 'dist/**', 'target/**', 'test-results/**', 'playwright/.cache', 'playwright-report/**']
    },

    // Base ESLint recommended config
    eslint.configs.recommended,

    // TypeScript ESLint recommended configs
    ...tseslint.configs.recommended,

    // Unicorn recommended config
    unicorn.configs['flat/recommended'],

    // Main configuration
    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                ecmaVersion: 6,
                sourceType: 'module',
                project: [
                    './tsconfig.eslint.json',
                ],
            },
        },
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            '@stylistic': stylistic,
            'import': importPlugin,
            'simple-import-sort': simpleImportSort,
            'unused-imports': unusedImports,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'sort-imports': 'off',
            'import/order': 'off',
            'unused-imports/no-unused-imports': 'error',

            'no-multiple-empty-lines': ['warn', {
                'max': 1,
            }],

            '@typescript-eslint/explicit-module-boundary-types': 'off',

            // Formatting rules using @stylistic plugin
            '@stylistic/indent': ['error', 4, {
                'MemberExpression': 'off',
                'SwitchCase': 1,
            }],

            '@stylistic/quotes': ['error', 'single', {
                'allowTemplateLiterals': 'always',
                'avoidEscape': true,
            }],

            '@typescript-eslint/no-explicit-any': 'off', // todo: review

            '@typescript-eslint/no-unused-vars': ['warn', {
                'args': 'none',
                'vars': 'all',
                'varsIgnorePattern': '^.*_$',
            }],

            'unicorn/empty-brace-spaces': 'off',

            'unicorn/filename-case': [ 'error', {
                'cases': {
                    'kebabCase': true,      // packages
                    'pascalCase': true,     // classes
                    'camelCase': true,      // functions
                    'snakeCase': true,      // test scenarios
                },
                "ignore": ["multi-actor"],
            }],

            'unicorn/no-array-for-each': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/no-array-callback-reference': 'off',
            'unicorn/no-static-only-class': 'off',

            'unicorn/numeric-separators-style': 'off',

            'unicorn/prefer-module': 'off',         // fixme disable when we can provide support for ESM
            'unicorn/prefer-node-protocol': 'off',  // fixme requires Node 14.13 or newer, disable until we no longer have to support Node 12
            'unicorn/prefer-spread': 'off',

            'unicorn/prevent-abbreviations': [ 'error', {
                'allowList': {
                    'conf': true,
                    'wdio': true,
                }
            }]
        }
    }
);

