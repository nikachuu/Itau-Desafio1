const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// App directory
const appDirectory = fs.realpathSync(process.cwd());

// Gets absolute path of file within app directory
const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// Host
const host = process.env.HOST || 'localhost';

// Required for babel-preset-react-app
process.env.NODE_ENV = 'development';

module.exports = {
    mode: 'development',
    entry: resolveAppPath('./src/js/index.js'),
    output: {
      filename: 'bundle.js',
    },
    devServer: {
        contentBase: resolveAppPath('public'),
        compress: true,
        hot: true,
        host,
        port: 8000,
        publicPath: '/',
    
      },
    plugins: [
        new HtmlWebpackPlugin({
          inject: true,
          template: resolveAppPath('public/index.html'),
        }),
    ],
  }