module.exports = function(){
  $.gulp.task('fonts', function(){
    return $.gulp.src($.config.source + '/fonts/*.*', {since: $.gulp.lastRun('fonts')})
      .pipe($.gulp.dest($.config.root + '/fonts'));
  });
}