'use strict';

var gulp = require('gulp');

gulp.task('build', ['stylus', 'scripts', 'assets', 'pugs','vendors','images']);
