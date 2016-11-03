var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var webpackConfig = require('./webpack.config.js');

// config
var config = {
  port: 8800,
  src: 'src/',
  dist: 'dist/',
};

gulp.task('js', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(gulp.dest(config.dist))
    .pipe($.connect.reload());
});

// copy html from src to dist
gulp.task('html', function() {
  return gulp.src(`${config.src}/index.html`)
    .pipe(gulp.dest(config.dist))
    .pipe($.connect.reload());
});

// copy images
gulp.task('img', function(cb) {
  return gulp.src(`${config.src}/public/img/**/*.{png,jpg,jpeg,gif}`)
    .pipe(gulp.dest(`${config.dist}/img/`));
});

// convert stylus to css
gulp.task('styles',function() {
  return gulp.src(`${config.src}/styles/app.styl`)
    .pipe($.stylus())
    .pipe(gulp.dest(`${config.dist}/css/`))
    .pipe($.connect.reload());
});

// waits until is finished then builds the project
gulp.task('build', ['styles', 'js', 'img', 'js'], function() {
  return gulp.src(`${config.src}/index.html`)
    .pipe(gulp.dest(config.dist))
    .pipe($.connect.reload());
});

// add livereload on the given port
gulp.task('server:connect', ['build'], function() {
  $.connect.server({
    root: config.dist,
    port: config.port,
    livereload: {
      port: 35729
    }
  });
});

// watch styl, html and js file changes
gulp.task('server', ['server:connect'], function() {
  gulp.watch(`${config.src}/styles/*.styl`, ['styles']);
  gulp.watch(`${config.src}/index.html`, ['html']);
  gulp.watch(`${config.src}/app/app.js`, ['js']);
});

// by default build project and then watch files in order to trigger livereload
gulp.task('default', function() {
  gulp.start('server');
});
