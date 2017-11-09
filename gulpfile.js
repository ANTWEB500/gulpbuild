"use strict";

global.$ = {
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks')
  },
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  del: require('del'),
  webpackStream: require('webpack-stream'),
  webpack: require('webpack'),
  browserSync: require('browser-sync').create(),
  named: require('vinyl-named'),
  isDevelopment: !process.env.NODE_ENV || process.env.NODE_ENV == 'development'
}

$.path.task.forEach(function(taskPath){
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'style',
    'vendor:css',
    'pug',
    'fonts',
    'copy:image',
    'webpack'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));