'use strict';
var gulp = require('gulp'),
    stylus = require('gulp-stylus');

gulp.task('stylus', function() {
    gulp.src('src/stylus/*.styl')
        .pipe(stylus({
            compress:true
        }))
        .pipe(gulp.dest('./build/css'));
});