const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



module.exports = {
    entry: './src/index.js',
    output: {
        "path": path.resolve(__dirname, 'dist'),
        "filename": '[name].[contenthash].js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: '页面',
            template: 'src/index.html'
        })
    ],
    module: {
        rules: [
        ],
    },
}
/* Advanced configuration (click to show) */






