const path = require('path');

module.exports = {
    mode: "development", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: './src/index.js',
    output: {
        "path": path.resolve(__dirname, 'dist'),
        "filename": '[name].[contenthash].js',
    }
}
/* Advanced configuration (click to show) */