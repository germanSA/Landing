'use strict';
var gulp = require('gulp'),
    pug = require('gulp-pug');

gulp.task('templates', function() {
    gulp.src('src/pug/**/*.pug')
        .pipe(pug({pretty:false}))
        .pipe(gulp.dest('./build'));
});
