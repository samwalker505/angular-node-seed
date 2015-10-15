var gulp = require('gulp');
var concat = require('gulp-concat');

var paths = {
  scripts: ['bower_components/angular/angular.js', 'bower_components/angular-route/angular-route.js', 'javascript/app.js'],
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

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
  // gulp.watch(paths.images, ['images']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'scripts']);
