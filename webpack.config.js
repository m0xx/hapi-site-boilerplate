const webpack = require("webpack");
const path = require("path");
const fs = require("fs");
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

const PROD = process.env.NODE_ENV === 'production';

function getEntry() {
    const srcPath = path.join(__dirname, 'assets', 'js');
    
    return fs.readdirSync(srcPath)
        .filter((file) => (fs.statSync(path.join(srcPath, file)).isDirectory()))
        .reduce((mem, name) => {
            mem[name] = name;
            return mem;
        }, {})
}

const config = {
    entry: getEntry(),
    output: {
        path: path.join(__dirname, '.build/js/'),
        publicPath: "js/",
        filename: "[name].js",
        chunkFilename: "[name].[chunkhash].js"
    },
    devtool: PROD ? 'source-map' : 'eval',
    debug: !PROD,
    watch: !PROD,
    cache: true,
    module: {
        loaders: []
    },
    plugins: [
        new CommonsChunkPlugin({
            name: 'commons',
            filename: 'commons.js',
            minChunks: Infinity
        })
    ],
    resolve: {
        root: [
            path.join(__dirname, "node_modules"),
            path.join(__dirname, "assets/js")
        ]
    }
};

if(PROD) {
    config.plugins.push(new UglifyJsPlugin({}))
}

module.exports = config;