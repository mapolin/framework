var gulp = require('gulp'),
    babel = require('gulp-babel'),
    clean = require('gulp-clean'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat');

// JS
gulp.task('scripts', function() {
    return gulp.src(['./js/src/**/_*.js', './js/src/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./js/'));
});

gulp.task('watch-js', function() {
    gulp.watch('js/src/**/*.js', ['scripts']);
});

gulp.task('default', ['scripts']);