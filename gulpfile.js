// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');
var minifyCss = require('gulp-minify-css');
var reactify = require('reactify');

//Lint Javascript
gulp.task('lint', function() {
  return gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('build/css'));
});

//Javascript
gulp.task('scripts', function() {
  // Single entry point to browserify
  gulp.src('src/js/main.js')
    .pipe(browserify({
      insertGlobals: true,
      transform: [reactify],
      debug: true
    }))
    .pipe(gulp.dest('build/js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['lint', 'scripts']);
  gulp.watch('scss/*.scss', ['sass']);
});

gulp.task('default', ['lint', 'sass', 'scripts']);
