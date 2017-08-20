const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const hotMiddlewareScript = 'webpack-hot-middleware/client'
const reactHotLoaderScript = 'react-hot-loader/patch'

module.exports = {
    entry: [
        reactHotLoaderScript,
        hotMiddlewareScript,
        './src/client.js',
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['env', {modules: false}],
                        'react',
                    ],
                    babelrc: false,
                    plugins: ['react-hot-loader/babel'],
                },
            },
        }, {
            test: /\.sass$/,
            use: [{
                loader: 'style-loader',
            }, {
                loader: 'css-loader',
            }, {
                loader: 'sass-loader',
                options: {
                    includePaths: ['node_modules/normalize-scss/sass'],
                },
            }],
        }],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.template.html',
        }),
    ],
}
