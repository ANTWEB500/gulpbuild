module.exports = function(){
  $.gulp.task('copy:image', function(){
    return $.gulp.src($.config.source + '/image/**/*.{png,jpg,svg,gif}', {since: $.gulp.lastRun('copy:image')})
      .pipe($.gulp.dest($.config.root + '/img/'));
  });
}