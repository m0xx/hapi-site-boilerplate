const Gulp = require('gulp');
const RequireDir = require('require-dir');

RequireDir('./tasks');


Gulp.task('build', ['clean', 'style', 'webpack'])

Gulp.task('dev', ['build', 'nodemon', 'watch']);

Gulp.task('default', ['dev']);
