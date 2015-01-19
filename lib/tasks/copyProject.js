/**
 * Starts the copying of a project
 */
module.exports = function (){
  var app = process.app;

  app.log('Creating a `' + app.wanted + '` project in ' + app.cd);
  console.log('');

  app.log('Started creating folders and writing files');

  app.helpers.checkDir(app.projects_dir + '/' + app.wanted, app.cd);
  this.f_next();
};