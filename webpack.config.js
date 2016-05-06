module.exports = {
    output: {
        filename: "app.js"
    },
    devtool: 'sourcemap',
    module: {
        loaders: [
            { test: /\.html$/, loader: 'raw' },
            { test: /\.styl$/, loader: 'style!css!stylus' },
            { test: /\.css/, loader: 'style!css' },
            { test: /\.js$/, loader: 'babel', exclude: [/client\/lib/, /node_modules/, /\.spec\.js/] }
        ]
    }
};