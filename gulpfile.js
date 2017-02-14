var gulp = require('gulp');
var $    = require('gulp-load-plugins')();

// config
var config = {
  port: 8800,
  src: 'src/',
  dist: 'dist/',
};

// environment config
var isProduction  = process.env.NODE_ENV === 'production';
var webpackConfig = require('./webpack.config.js');

// https://github.com/ai/autoprefixer
var autoprefixerBrowsers = [
  'ie >= 9',
  'ie_mob >= 10',
  'ff >= 30',
  'chrome >= 34',
  'safari >= 6',
  'opera >= 23',
  'ios >= 6',
  'android >= 4.4',
  'bb >= 10'
];

// combine js files into webpack
gulp.task('js', function() {
  return gulp.src(webpackConfig.entry)
    .pipe($.webpack(webpackConfig))
    .pipe(gulp.dest(`${config.dist}/scripts/`))
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
  return gulp.src(`${config.src}/img/**/*.{png,jpg,jpeg,gif}`)
    .pipe(gulp.dest(`${config.dist}/images/`));
});

// copy fonts
gulp.task('font', function(cb) {
  return gulp.src(`${config.src}/fonts/*`)
    .pipe(gulp.dest(`${config.dist}/fonts/`));
});

// convert stylus to css
gulp.task('styles',function() {
  return gulp.src(`${config.src}/app.styl`)
    .pipe($.stylus({
      // only compress during production
      compress: isProduction
    }))
    .pipe($.autoprefixer({browsers: autoprefixerBrowsers}))
    .pipe(gulp.dest(`${config.dist}/styles/`))
    .pipe($.connect.reload());
});

// build the project after centrain tasks are finished
gulp.task('build', ['styles', 'js', 'img', 'font'], function() {
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
  gulp.watch(`${config.src}/**/*.html`, ['js']);
  gulp.watch(`${config.src}/**/*.js`, ['js']);
});

// build project by default and then watch files in order to trigger livereload
gulp.task('default', function() {
  gulp.start('server');
});
