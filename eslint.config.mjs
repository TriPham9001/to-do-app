// eslint.config.mjs
import js from '@eslint/js';
import * as prettier from 'eslint-plugin-prettier/recommended';
import typescript from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import next from 'eslint-plugin-next';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import jest from 'eslint-plugin-jest';
import jestFormatting from 'eslint-plugin-jest-formatting';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDom from 'eslint-plugin-jest-dom';
import playwright from 'eslint-plugin-playwright';
import storybook from 'eslint-plugin-storybook';

export default [
  js.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': typescript,
      'unused-imports': unusedImports,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      // Your custom rules
      'import/no-extraneous-dependencies': 'off',
      'no-useless-escape': 'off',
      'prefer-regex-literals': 'off',
      'no-nested-ternary': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'no-param-reassign': 'off',
      'import/extensions': 'off',
      'react/function-component-definition': 'off',
      'react/destructuring-assignment': 'off',
      'react/require-default-props': 'off',
      'react/jsx-props-no-spreading': 'off',
      '@typescript-eslint/comma-dangle': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'import/prefer-default-export': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/order': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },

  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },

  {
    plugins: { next },
    rules: {
      ...next.configs['core-web-vitals'].rules,
    },
  },

  {
    ...prettier,
    rules: {
      ...prettier.rules,
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'auto',
          trailingComma: 'es5',
          semi: true,
          singleQuote: true,
          tabWidth: 2,
          plugins: ['prettier-plugin-tailwindcss'],
          tailwindConfig: './tailwind.config.ts',
          tailwindFunctions: ['clsx'],
        },
      ],
    },
  },

  // ✅ Testing files
  {
    files: ['**/*.test.ts', '**/*.test.tsx'],
    plugins: {
      jest,
      'jest-formatting': jestFormatting,
      'testing-library': testingLibrary,
      'jest-dom': jestDom,
    },
    rules: {
      ...jest.configs.recommended.rules,
      ...jestFormatting.configs.recommended.rules,
      ...testingLibrary.configs.react.rules,
      ...jestDom.configs.recommended.rules,
    },
  },

  // ✅ Playwright e2e
  {
    files: ['**/*.spec.ts'],
    plugins: { playwright },
    rules: {
      ...playwright.configs.recommended.rules,
    },
  },

  // ✅ Storybook
  {
    files: ['*.stories.*'],
    plugins: { storybook },
    rules: {
      ...storybook.configs.recommended.rules,
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: true,
        },
      ],
    },
  },
];
