/**
 * Checks for required app variables
 */
module.exports = function (){
  var app = process.app;

  if(!app.wanted)
      return app.logErr('Please specify app type to build, i.e: newapp node');

  this.f_next();
};