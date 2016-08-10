'use strict';

var gulp = require('gulp');

gulp.task('default', ['pugs', 'stylus', 'scripts', 'assets','vendors'], function() {

    gulp.watch(['src/assets/**', 'src/php/*.php'], function(event) {
        gulp.run('assets');
    });

    gulp.watch(['src/pug/**/*.*'], function(event) {
        gulp.run('pugs');
    });

    gulp.watch(['src/stylus/**/*.*'], function(event) {
        gulp.run('stylus');
    });

    gulp.watch(['src/scripts/*.js'], function(event) {
        gulp.run('scripts');
    });
});