var gulp = require('gulp');
var sync = require('run-sequence');
var browser = require('browser-sync')

gulp.task('default', function(done){
    console.log("gulping");
    sync('serve', done);
});


gulp.task('serve', function(){
    browser({
        port: process.env.PORT || 8080,
        open: false,
        ghostMode: false,
        server: {
            baseDir: 'dist'
        }
    })
});