const neostandard = require('neostandard')

module.exports = [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'examples/**',
      'template/**',
      'src/static/**',
      'test-src/**',
      '.test/**'
    ]
  },
  ...neostandard(),
  {
    languageOptions: {
      parser: require('@babel/eslint-parser'),
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-env']
        }
      },
      globals: {
        env: 'readonly'
      }
    },
    rules: {
      'no-console': 'off',
      'space-before-function-paren': 'off',
      'import-x/no-unresolved': 'off'
    }
  }
]
