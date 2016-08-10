'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('scripts', function() {
    gulp.src(['src/scripts/**/*.*'])
        .pipe(concat('main.min.js'))
        .pipe(uglify({outSourceMap: true}))
        .pipe(gulp.dest('./build/js/'));
});