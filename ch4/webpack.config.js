var webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    target: 'web',
    mode: 'development',
    entry: {index: './src/js/index.js'},
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.css$/, 
                use: ExtractTextPlugin.extract(
                    { fallback: 'style-loader', use: 'css-loader' }
                )
            }
        ]
    },
    devServer:{
        proxy: {
            '/api': 'http://localhost:3000'
        },
        contentBase: path.join(__dirname, 'dist'),
        compress: true, 
        historyApiFallback: true,
        hot: true,
        https: false,
        noInfo: true
    },
    plugins:[
        new ExtractTextPlugin('[name].[hash].css'),
        new HtmlWebpackPlugin({ template: './src/html/index.html', }),
        new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ])
    ]
}