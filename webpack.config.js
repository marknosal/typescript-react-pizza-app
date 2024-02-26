const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            templates: './src/index.html',
            filename: 'index.html',
        }),
    ],
};