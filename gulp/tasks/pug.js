module.exports = function(){
  $.gulp.task('pug', function(){
    return $.gulp.src('./source/templates/pages/*.pug')
      .pipe($.gp.pug({
        pretty: true
      }))
      .on('error', $.gp.notify.onError(function(error){
        return {
          title: 'Pug',
          message: error.message
        }
      }))
      .pipe($.gulp.dest('dist/'));
  });
}