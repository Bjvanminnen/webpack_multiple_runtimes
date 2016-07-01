var webpack = require('webpack');

module.exports = {
    entry: {
        B1: "./B1",
        B2: "./B2",
    },
    output: {
        filename: "[name].js",
        path: __dirname + '/build' 
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common_B.js")
    ]
}
