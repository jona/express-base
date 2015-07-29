var gulp = require('gulp'),
    config = require('../../config'),
    sourceMaps = require('gulp-sourcemaps'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    browserify = require('browserify'),
    watchify = require('watchify'),
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
    debug: true
};

var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

b.transform(reactify);
b.transform(babelify);

gulp.task('compile:scripts', ['compile:clean'], bundle);
b.on('update', bundle);
b.on('log', gutil.log);

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
