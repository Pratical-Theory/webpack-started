const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    mode: 'production',

    output: {
        clean: true,
        filename: 'main.[contenthash].js'
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ],
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
                test: /componentes.css/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            //file loader
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [{
                    loader: 'file-loader',
                }]
            },
            //babel
            {
    
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                      loader: "babel-loader",
                      options: {
                        presets: ['@babel/preset-env']
                      }
                    }
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
        new CopyPlugin({
            patterns: [
                {from: "src/assets", to: "assets/"},
            ],
        }),
    ],

};