"use strict";

module.exports = function(){
  $.gulp.task('webpack', function(callback){
    let firstBuildReady = false;

    function done(err, stats){
      firstBuildReady = true;
      if (err){
        return;
      }
    }

    let option  = {
      output: {
        publicPath: '/js/',
        filename: '[name].js'
      },
      watch: $.isDevelopment,
      devtool: $.isDevelopment ? 'cheap-module-inline-source-map' : null,
      plugins: [
        new $.webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery'
        }),
        new $.webpack.optimize.CommonsChunkPlugin({
          name: 'vendor',
          minChunks: 2
        })
      ]
    }

    return $.gulp.src('./source/scripts/pages/*.js')
      .pipe($.named())
      .pipe($.webpackStream(option, $.webpack, done))
      .pipe($.gulp.dest('./dist/js'))
      .on('data', function(){
        if (firstBuildReady){
          callback();
        }
      });
  })
}