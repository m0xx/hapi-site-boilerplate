const Gulp = require('gulp');
const Gutil = require('gulp-util');
const Webpack = require('webpack');
const path = require("path");

const webpackConfig = require('./../webpack.config');

Gulp.task('webpack', function() {

    Webpack(webpackConfig, function(err, stats) {

        if (err) {
            throw new Gutil.PluginError('webpack', err);
        }

        Gutil.log('[webpack]', stats.toString({
            colors: true
        }));
    });
});