var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('nodemon', ['build'], function () {
  return nodemon({
    script: 'bin/www.js',
    ext: 'js',
  });
});
