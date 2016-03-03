module.exports = {
    entry: "./src/js/smoothscroll.js",
    output: {
        path: "./dist/js/",
        filename: "smoothscroll.js"
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: 'es2015'
            }
        }]
    }
};