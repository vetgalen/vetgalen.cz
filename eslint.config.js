import js from '@eslint/js'
import react from 'eslint-plugin-react'
import astro from 'eslint-plugin-astro'
import tsParser from '@typescript-eslint/parser'
import prettierConfig from 'eslint-config-prettier'

export default [
  {
    ignores: ['dist/**', 'node_modules/**', '.astro/**', '.agents/**', 'eslint.config.js'],
  },
  js.configs.recommended,
  // JS and JSX (React island components)
  {
    files: ['src/**/*.{js,jsx}', 'astro.config.mjs'],
    plugins: { react },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...prettierConfig.rules,
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'no-irregular-whitespace': ['error', { skipJSXText: true }],
    },
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
