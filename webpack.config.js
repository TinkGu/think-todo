/**
 * Created by Tink on 2015/10/20.
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common', 'common.js');

module.exports = {

    entry: {
        bundle: './public/scripts/entry.jsx',
        common: ['react', 'react-dom']
    },
    output: {
        path: './public/dist/scripts',
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.scripts', '.jsx', '.js', '.json']
    },
    module: {
        loaders: [
            { test: /\.jsx$/, loaders: ['jsx?harmony'] },
            { test: /\.js$/, loader: 'babel-loader!jsx-loader?harmony'}
        ]
    },
    plugins: [commonsPlugin],
}