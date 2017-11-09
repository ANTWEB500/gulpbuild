module.exports = function(){
  $.gulp.task('watch', function(){
    $.gulp.watch($.config.source + '/styles/**/*.{sass,scss}', $.gulp.series('style'));
    $.gulp.watch($.config.source + '/templates/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch($.config.source + '/scripts/**/*.js', $.gulp.series('webpack'));
  });
}