'use strict';

var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    sass         = require('gulp-sass'),
    sourcemaps   = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS     = require('gulp-clean-css'),
    jshint       = require('gulp-jshint'),
    babel        = require('gulp-babel'),
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglify'),
    browserSync  = require('browser-sync');

// Live reload anytime a file changes
gulp.task('default', ['watch']);

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', ['browserSync', 'build-css', 'build-js'], function() {
  gulp.watch('scss/**/*.scss', ['build-css']);
  gulp.watch('js/**/*.js', ['build-js']);
  gulp.watch('public/**/*.html').on('change', browserSync.reload);
});

// Compile SASS files
gulp.task('build-css', function() {
  return gulp.src('scss/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
    .pipe(concat('main.css'))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
});

// configure the build-js task
gulp.task('build-js', ['jshint'], function() {
  return gulp.src('js/**/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js'))
    .pipe(browserSync.stream());
});

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src('js/**/*.js')
    .pipe(jshint({
      esversion: 6
    }))
    .pipe(jshint.reporter('default'));
});

// Spin up a server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'public'
    }
  })
});
