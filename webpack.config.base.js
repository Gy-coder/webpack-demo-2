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
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.styl$/,
                loader: ['style-loader','css-loader','stylus-loader']
            },
            {
                test: /\.less$/,
                loader: ["style-loader","css-loader","less-loader"]
            },
            {
                test: /\.scss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            // Prefer `dart-sass`
                            implementation: require('dart-sass'),
                        },
                    },
                ],
            },
        ],
    },
}
/* Advanced configuration (click to show) */






