// const CracoAntDesignPlugin = require('craco-antd')
// const slash = require('slash2')
const WebpackBar = require('webpackbar')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  babel: {
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          // https://babeljs.io/blog/2018/09/17/decorators
          // https://github.com/mobxjs/mobx/issues/1352
          legacy: true
        }
      ]
    ]
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  webpack: {
    configure: {
      plugins: [
        new WebpackBar({ profile: true })
      ]
    }
  }
}

