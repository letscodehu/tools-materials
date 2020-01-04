const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const optimizePlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin(), new optimizePlugin()
    ],
    entry: {
        "index" : "./src/index.js",
        "profile" : "./src/profile.js"
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ]
            },
            {
                test : /\.(woff|woff2)$/,
                use: [
                    {
                        loader : 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,  
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 2000,
                        name : '[name].[ext]',
                        outputPath: 'img/'
                    }
                }] 
            }
        ]
    }
}