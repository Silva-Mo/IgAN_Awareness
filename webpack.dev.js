const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    static: {
      directory: './dist',
      watch: true
    },
    compress: true,
    port: 8080,
    hot: true,
    historyApiFallback: true,
    watchFiles: {
      paths: ['src/**/*'],
      options: {
        ignored: /node_modules/,
        usePolling: false
      }
    }
  }
});
