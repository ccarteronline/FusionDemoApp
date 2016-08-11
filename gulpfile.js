var gulp = require('gulp')
    , shell = require('gulp-shell')
    , plug = require('gulp-load-plugins')()
    , nodemon = require('gulp-nodemon')
    , Karma = require('karma').Karma;

var source = [
    'public/js/**/*.js'
];

gulp.task('server', function () {
    nodemon({
        script: 'main.js',
        tasks: ['hint']
    })
    .on('restart', function () {
        console.log('restarted');
    })
});

gulp.task('hint', function () {
    return gulp
        .src(source)
        .pipe(plug.jshint('./.jshintrc'))
        .pipe(plug.jshint.reporter('jshint-stylish'));
});

// gulp.task('test', shell.task([
//     'karma start && python -mwebbrowser http://localhost:9876/'
// ]));

gulp.task('watch', function () {
    return gulp
        .watch(source, ['hint'])
        .on('change', function (event) {
            console.log('*** File ' + event.path + ' was ' + event.type + ', running tasks...');
        })
});
