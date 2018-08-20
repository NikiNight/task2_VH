'use strict';

const gulp = require('gulp');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug');
const del = require('del');
const order = require("gulp-order");
const cssmin = require("gulp-cssmin");
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "development";

gulp.task('styles', function () {
   return gulp.src('css/less/main.less')
       .pipe(sourcemaps.init())
       .pipe(less())
       .pipe(sourcemaps.write())
       .pipe(cssmin())
       .pipe(gulp.dest('css'));
});

gulp.task('cleancss', function () {
   return del('css/main.css');
});

gulp.task('buildcss', gulp.series(['cleancss', 'styles']));

gulp.task('watch', function () {
    gulp.watch('css/scss/**/*.scss', gulp.series(['buildcss']));
});
