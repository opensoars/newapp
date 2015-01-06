/**
 * Checks for required command line arguments
 * Starts f_
 */
module.exports = function (){
  var app = process.app;

  if(!app.wanted)
      return app.logErr('Please specify app type to build, i.e: newapp node');

  if(!app.name)
    return app.logErr('Please specify a name, i.e: newapp node app_name');

  this.tasks.f_next();
};