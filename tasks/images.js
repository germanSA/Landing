'use strict';

'use strict';

var gulp = require('gulp');
var gm = require('gulp-gm');
gulp.task('images', function () {
    gulp.src('src/img/*')
        .pipe(gulp.dest('./build/img/'));
});
