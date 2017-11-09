module.exports = function(){
  $.gulp.task('vendor:css', function(){
    return $.gulp.src($.config.vendorcss)
      .pipe($.gp.concat('vendor.min.css'))
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/css'));
  });
}