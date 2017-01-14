const Gulp = require('gulp');

Gulp.task('watch', function() {
    Gulp.watch('./assets/less/**/*', ['style']);
    // Gulp.watch('./assets/images/**/*', ['images']);
});