var gulp = require('gulp');
var shell = require('gulp-shell');
var plug = require('gulp-load-plugins')();
var livereload = require('gulp-livereload');

var source = [
    'public/js/**/*.js'
];

gulp.task('server', shell.task([
    'nodemon main.js'
]));

gulp.task('hint', function () {
    return gulp
        .src(source)
        .pipe(plug.jshint('./.jshintrc'))
        .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('watch', function () {
    return gulp
        .watch(source, ['hint'])
        .on('change', function (event) {
            livereload.listen();
            console.log('*** File ' + event.path + ' was ' + event.type + ', running tasks...');
        })
});
