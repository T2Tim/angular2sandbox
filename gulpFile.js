var gulp    = require('gulp');
var sync    = require('run-sequence');
var webpack = require('webpack-stream');
var browser = require('browser-sync');
/*
 map of paths for using with the tasks below
 */
var paths = {
    entry: 'ClientApp/app/app.js',
    app: ['ClientApp/app/**/*.{js,styl,html}', 'ClientApp/styles/**/*.styl'],
    js: 'ClientApp/app/**/*!(.spec.js).js',
    styl: ['ClientApp/app/**/*.styl', 'ClientApp/style/**/*.styl'],
    toCopy: ['ClientApp/index.html'],
    html: ['ClientApp/index.html', 'ClientApp/app/**/*.html'],
    dest: 'web'
};

gulp.task('build', function() {
    return gulp.src(paths.entry)
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest(paths.dest));
});

gulp.task('serve', function() {
    browser({
        port: process.env.PORT || 4500,
        open: false,
        ghostMode: false,
        server: {
            baseDir: 'web'
        }
    });
});

/*
 simple task to copy over needed files to dist
 */
gulp.task('copy', function() {
    return gulp.src(paths.toCopy, { base: '' })
        .pipe(gulp.dest(paths.dest));
});

/*
 task to watch files for changes and call build and copy tasks
 */
gulp.task('watch', function() {
    gulp.watch(paths.app, ['build', browser.reload]);
    gulp.watch(paths.toCopy, ['copy', browser.reload]);
});

gulp.task('default', function(done) {
    sync('build', 'copy', 'serve', 'watch', done)
});
