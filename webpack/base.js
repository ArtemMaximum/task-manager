const { resolve } = require('path')
const HtmlPlugin = require('html-webpack-plugin')

const Package = require('../package.json')


// const publicPath = resolve(__dirname, '..', 'static')

module.exports = {
  name: 'task-manager',
  context: resolve(__dirname, '..', 'src'),
  target: 'web',
  
  entry: {
    index: [],
    polyfill: [
      'babel-polyfill',
    ],
  },
  
  output: {
    path: resolve(__dirname, '..', 'dist'),
    filename: 'js/[name]-[hash].js',
    publicPath: '/',
    pathinfo: false,
  },
  
  resolve: {
    extensions: ['.jsx', '.js'],
    modules: [
      resolve(__dirname, '..', 'src'),
      resolve(__dirname, '..', 'src', 'components'),
      'node_modules',
    ],
  },
  
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      // {
      //   test: /\.svg$/,
      //   loader: 'svg-inline-loader?removeTags',
      // },
      {
        test: /rsa\.pub$/,
        use: 'text-loader',
      },
    ],
  },
  
  plugins: [
    new HtmlPlugin({
      template: resolve(__dirname, '..', 'src', 'index.html'),
      version: Package.version,
    }),
  ],
}
