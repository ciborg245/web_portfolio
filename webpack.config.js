const path                      = require('path')
const nodeExternals             = require('webpack-node-externals')
const htmlWebPackPlugin         = require('html-webpack-plugin')

const moduleObj = {
    rules: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          use: ['babel-loader']
        }, {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
    	}, {
    		test: /\.(png|jpg)$/,
    		use: ['url-loader']
    	}, {
            test: /\.scss$/,
    		use: ['css-loader', 'sass-loader']
        }
    ],
}

const client = {
    mode: 'development',
    entry: {
        'client': './src/client/index.js',
    },
    target: 'web',
    output: {
        filename: 'client.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: moduleObj,
    plugins: [
        new htmlWebPackPlugin({
          template: 'src/client/index.html'
        })
      ]
}

module.exports = client;
