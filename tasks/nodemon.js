const Gulp = require('gulp');
const Nodemon = require('gulp-nodemon');

Gulp.task('nodemon', function() {

    const nodeArgs = [];
    if (process.env.DEBUGGER) {
        nodeArgs.push('--debug');
    }

    Nodemon({
        script: 'server.js',
        ext: 'js pug',
        watch: [
            'src',
            'templates'
        ],
        ignore: [
            'assets/',
            'node_modules/',
            '.build/'
        ],
        nodeArgs: nodeArgs
    })
    .on('restart', function(files) {
        console.log('change detected:', files);
    })
});