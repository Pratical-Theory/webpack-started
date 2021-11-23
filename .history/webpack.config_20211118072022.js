const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CopyPlugin = require("copy-webpack-plugin");

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
                exclude : /\.styles.css$/i,
                use: ["style-loader", "css-loader"],
            },
            //mini-css-extract-loader
            {
                test: /\.styles.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            //file loader
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                }]
            }
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
        new CopyPlugin(
            patterns:[
                {from "source", to: "dest"},
                {from:"other", to: "public"}
            ]
        )
    ],

};