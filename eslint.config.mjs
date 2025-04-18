import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
  recommendedConfig: js.configs.recommended,
})

const eslintConfig = [
  js.configs.recommended,
  ...compat.config({
    extends: ['next'],
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json', // if you use one
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/consistent-type-imports': 'warn',
    },
  }),
];

export default eslintConfig