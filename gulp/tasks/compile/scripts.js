var gulp = require('gulp'),
    config = require('../../config'),
    sourceMaps = require('gulp-sourcemaps'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    reactify = require('reactify'),
    babelify = require("babelify"),
    gutil = require('gulp-util'),
    assign = require('lodash.assign'),
    uglify = require('gulp-uglify');

var customOpts = {
    entries: [config.src + 'js/index.js'],
    extensions: ['.jsx'],
    insertGlobals: true,
    standalone: 'APP_NAME',
    debug: true,
    transform: [reactify, babelify]
};

var opts = assign({}, customOpts);
var b = browserify(opts);

gulp.task('compile:scripts', ['compile:clean'], bundle);

function bundle() {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('app.min.js'))
    .pipe(buffer())
    .pipe(sourceMaps.init({loadMaps: true}))
    .pipe(uglify({mangle: false}))
    .pipe(sourceMaps.write('./'))
    .pipe(gulp.dest(config.dest));
}
