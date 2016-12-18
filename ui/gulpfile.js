var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var modules = ['cms']
var debug = false

function build(module) {
    return browserify({entries: module+'/' + module +'.jsx', extensions: ['.jsx'], debug: debug})
        .transform('babelify', {presets: ['es2015', 'react']})
        .transform(require('browserify-css'))
        .bundle()
        .pipe(source(module + '.js'))
        .pipe(gulp.dest(module+'/dist'));
}

function watch(module) {
    gulp.watch(module+'/**/*.jsx', ['build-'+module]);
    gulp.watch('./common/**/*.jsx', ['build-'+module]);
    gulp.watch(module+'/**/*.css', ['build-'+module]);
}


var buildTasks = []
var watchTasks = []
modules.map( module => {
    gulp.task('build-'+module, () => build(module) );
    gulp.task('watch-'+module, ['build-'+module], () => watch(module) );
    buildTasks.push('build-'+module)
    watchTasks.push('watch-'+module)
})

gulp.task('build', buildTasks);
gulp.task('watch', watchTasks);
gulp.task('default', ['watch']);
