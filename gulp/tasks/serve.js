module.exports = function(){
  $.gulp.task('serve', function(){
    $.browserSync.init({
      server: {
        baseDir: $.config.root
      }
    });
    $.browserSync.watch([
      $.config.root + '/**/*.*',
      '!**/*.css'
    ], $.browserSync.reload);
  });
}