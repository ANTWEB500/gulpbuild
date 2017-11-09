module.exports = function(){
  $.gulp.task('style', function(){
    return $.gulp.src($.config.source + '/styles/common.{scss,sass}')
      .pipe($.gp.if($.isDevelopment, $.gp.sourcemaps.init()))
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer({
        browsers: $.config.autoPrefixerConfig
      }))
      .on('error', $.gp.notify.onError(function(error){
        return {
          title: 'Style',
          message: error.message
        }
      }))
      .pipe($.gp.rename({
        suffix: '.min'
      }))
      .pipe($.gp.if(!$.isDevelopment, $.gp.csso()))
      .pipe($.gp.if($.isDevelopment, $.gp.sourcemaps.write()))
      .pipe($.gulp.dest($.config.root + '/css'))
      .pipe($.browserSync.stream());
  });
};