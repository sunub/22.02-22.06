const postcssPresetEnv  = require('postcss-preset-env')
const postcssImport     = require('postcss-import')
const postcsseasings    = require('postcss-easings')
const importUrl         = require('postcss-import-url')

module.exports = {
  plugins: [
    importUrl(),
    postcssImport({
      path: './src/style.css',
    }),
    postcsseasings(),
    postcssPresetEnv({
      stage: 0,
    }),
  ]
}