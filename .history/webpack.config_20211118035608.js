const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'production',

    output: {
        clean: true,
    },

    module: {
        rules: [
            //html loader
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                    minimize: false,
                },
            },
            //css loader
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            //mini-css-extract-loader
            {
                test: /\.css/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
                filename: '[name].[fullhash].css',
                ignoreOrder: false,
            }),
    ],

};