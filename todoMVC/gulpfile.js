var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    watch = require('gulp-watch'),
    notify = require('gulp-notify'),
    minify = require('gulp-cssmin'),
    less = require('gulp-less'),
    sourcemap = require('gulp-sourcemaps');

gulp.task('minify_js', function() {
    return gulp.src('js/src/*.js')
            .pipe(concat('script.js'))
            .pipe(uglify())
            .pipe(gulp.dest('js/prod'))
            .pipe(notify('Minify js is completed'));
});

gulp.task('minify_css', function() {
        return gulp.src('css/src/*.less')
            //Нужно для получения sourcemaps
            //.pipe(sourcemap.init())
            .pipe(less())
            //Нужно для получения sourcemaps
            //.pipe(sourcemap.write())
            .pipe(concat('style.css'))
            .pipe(minify())
            .pipe(gulp.dest('css/prod'))
            .pipe(notify('Minify css is completed'));
});

gulp.task('default', function() {
    gulp.watch('js/src/*.js', ['minify_js']);
    gulp.watch('css/src/*.less', ['minify_css']);
});