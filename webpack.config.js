const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const ROOT = path.resolve( __dirname, 'src' );
const DESTINATION = path.resolve( __dirname, 'dist' );


module.exports = {
    context: ROOT,

    entry: {
        'main': './main.ts'
    },
    
    output: {
        filename: '[name].bundle.js',
        path: DESTINATION
    },
    
    node: {
        fs: 'empty'
    },

    resolve: {
        extensions: ['.ts', '.js'],
        modules: [
            ROOT,
            'node_modules'
        ]
    },

    module: {
        rules: [
            /* preloaders */
            {
                enforce: 'pre',
                test: /\.js$/,
                use: 'source-map-loader'
            },
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'tslint-loader'
            },

            /* loaders */
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: 'awesome-typescript-loader'
            }
        ]
    },

    plugins: [
        // A webpack plugin to remove/clean the build folder(s) before building
          new CleanWebpackPlugin(['dist']),
    ],

    devtool: 'cheap-module-source-map',
    
    devServer: {
        // historyApiFallback: true
    }
}
