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
            }
        ]
    }
}