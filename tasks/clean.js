const Gulp = require('gulp');
const Del = require('del');

Gulp.task('clean', function(cb) {
    Del.sync('.build')
});