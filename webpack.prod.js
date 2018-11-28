const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    // Should keep this sideEffects, otherwise the pcss file will not include.
    sideEffects: false,
    splitChunks: {
      minSize: 30000,
    },
  },
});