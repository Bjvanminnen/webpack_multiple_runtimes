var webpack = require('webpack');

module.exports = {
    entry: {
        A1: "./A1",
        A2: "./A2",
    },
    output: {
        filename: "[name].js",
        path: __dirname + '/build' 
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common_A.js")
    ]
}
