'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('vendors', function() {
    gulp.src([
        'bower_components/jquery/dist/jquery.min.js',
        'bower_components/modernizer/modernizr.js'
    ])
        .pipe(concat('required.min.js'))
        .pipe(uglify({outSourceMap: true}))
        .pipe(gulp.dest('build/js/'));

    gulp.src([
        'bower_components/bootstrap/dist/js/bootstrap.min.js',
        'bower_components/jquery-easing/jquery.easing.min.js',
        'bower_components/respond/dest/respond.min.js',
        'bower_components/waypoints/lib/jquery.waypoints.min.js',
        'bower_components/nivo-slider/jquery.nivo.slider.pack.js',
        'bower_components/jquery-validation/dist/jquery.validate.min.js'
    ])
        .pipe(concat('vendors.min.js'))
        .pipe(uglify({outSourceMap: true}))
        .pipe(gulp.dest('build/js/'));

    gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/bootstrap/dist/css/bootstrap.min.css.map',
        'bower_components/animate.css/animate.min.css',
        'bower_components/icomoon-bower/style.css',
        'bower_components/font-awesome/css/font-awesome.min.css',
        'bower_components/nivo-slider/nivo-slider.css'
    ]).pipe(gulp.dest('build/css/'));

    gulp.src([
        'bower_components/icomoon-bower/fonts/**'
    ]).pipe(gulp.dest('build/css/fonts/'));

    gulp.src([
        'bower_components/font-awesome/fonts/**'
    ]).pipe(gulp.dest('build/fonts/'));
});