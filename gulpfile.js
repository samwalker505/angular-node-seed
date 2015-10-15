var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');


var paths = {
  scripts: ['bower_components/angular/angular.js', 'bower_components/angular-route/angular-route.js', 'src/javascripts/app.js'],
  css: ['bower_components/foundation/css/foundation.css', 'src/stylesheets/css/*.css'],
  scss: ['src/stylesheets/scss/*.scss']
};

// Not all tasks need to use streams
// A gulpfile is just another node program and you can use any package available on npm
// gulp.task('clean', function() {
//   // You can use multiple globbing patterns as you would with `gulp.src`
//   return del(['build']);
// });

gulp.task('scripts', function() {
  // Minify and copy all JavaScript (except vendor scripts)
  // with sourcemaps all the way down
  return gulp.src(paths.scripts)
      .pipe(concat('bundle.js'))
    .pipe(gulp.dest('public/javascripts'));
});


gulp.task('scss', function () {
  gulp.src('src/stylesheets/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/stylesheets/css'));
});


gulp.task('stylesheets', ['scss'], function() {
  return gulp.src(paths.css)
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(concatCss("bundle.css"))
    .pipe(gulp.dest('public/stylesheets'));
});






// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.scss, ['scss']);
  gulp.watch(paths.css, ['stylesheets']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts', 'stylesheets']);
