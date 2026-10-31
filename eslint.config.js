import js from '@eslint/js'
import astro from 'eslint-plugin-astro'
import tsParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'
import globals from 'globals'

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', '.agents/**', 'eslint.config.js'],
  },
  js.configs.recommended,
  // JS and JSX (React island components). ESLint 10 tracks JSX references
  // itself, so eslint-plugin-react's jsx-uses-vars is no longer needed.
  {
    files: ['src/**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    rules: {
      ...prettierConfig.rules,
      'no-irregular-whitespace': ['error', { skipJSXText: true }],
    },
  },
  {
    files: ['astro.config.mjs'],
    languageOptions: { globals: globals.node },
    rules: { ...prettierConfig.rules },
  },
  // Kill-switch service worker (see the comment in the file)
  {
    files: ['public/sw.js'],
    languageOptions: { globals: globals.serviceworker },
  },
  // Astro components
  ...astro.configs.recommended,
  {
    files: ['**/*.astro'],
    languageOptions: {
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      ...prettierConfig.rules,
    },
  },
]
