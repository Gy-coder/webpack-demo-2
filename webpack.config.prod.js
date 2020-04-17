const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const base = require('./webpack.config.base')



module.exports = {
    ...base,
    mode: "development", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.

    devServer: {
        contentBase: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
        title: '页面',
        template: 'src/index.html'
    }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'style.[contenthash].css',
            chunkFilename: '[id].[contenthash].css',
        }),
    ],
    module: {
        ...base.module.rules,
        rules: [
            {
                test: /\.css$/i,
                // use: ['style-loader', 'css-loader'],
                // use: [MiniCssExtractPlugin.loader, 'css-loader'],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '/public/path/to/',
                        },
                    },
                    'css-loader',
                ],
            },
        ],
    },
}






