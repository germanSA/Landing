'use strict';

var gulp = require('gulp');

gulp.task('assets', function() {
    gulp.src(['src/assets/**/*.*'])
        .pipe(gulp.dest('./build/'));
});