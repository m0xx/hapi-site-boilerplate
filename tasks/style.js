const Gulp = require('gulp');
const LessAutoprefix = require('less-plugin-autoprefix');
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');

Gulp.task('style', function () {
    return Gulp.src('./assets/less/**/*.less')
        .pipe(sourcemaps.init())
        .pipe(less({
            plugins: [
                new LessAutoprefix()
            ]
        }))
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./maps'))
        .pipe(Gulp.dest('.build/css'));
});