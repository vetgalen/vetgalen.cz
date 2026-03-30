const js = require('@eslint/js')
const react = require('eslint-plugin-react')
const prettierConfig = require('eslint-config-prettier')

module.exports = [
  {
    ignores: ['public/**', 'node_modules/**', '.cache/**', 'eslint.config.js'],
  },
  js.configs.recommended,
  {
    files: ['gatsby-node.js', 'gatsby-config.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'writable',
        exports: 'writable',
        __dirname: 'readonly',
        process: 'readonly',
      },
    },
    rules: {
      ...prettierConfig.rules,
    },
  },
  {
    files: ['src/**/*.js', 'src/**/*.jsx'],
    plugins: { react },
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        process: 'readonly',
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
]
