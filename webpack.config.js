const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: './src/index.js',
    output: {
        "path": path.resolve(__dirname, 'dist'),
        "filename": '[name].[contenthash].js',
    },
    plugins: [new HtmlWebpackPlugin({
        title: '亲自指挥,亲自部署',
        template: 'src/index.html'
    })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

}
/* Advanced configuration (click to show) */






