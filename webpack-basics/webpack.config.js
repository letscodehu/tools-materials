
module.exports = {
    entry : './src/start.js',
    module : {
        rules: [
            { 
                test : /\.css$/, 
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    output : {
        filename: '[name].js',
        library: '_'
    }
}