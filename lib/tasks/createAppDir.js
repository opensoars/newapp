/**
 * Sets app.cd to the created folder
 * Creates a directory to copy the wanted app to
 */
module.exports = function (){
  var app = process.app,
      fs = app.fs;

  var app_name = app.template_handles.name;

  // Update the cd with the new app location
  app.cd = app.cd + '/' + app_name;

  // Create new app folder if it doesn't exist already
  fs.readdir(app.cd, function (err, dir){
    if(!err || dir)
      return app.logErr('Directory `' + app_name + '` already exists');

    fs.mkdir(app_name, function (err){
      if(err)
        return app.logErr('Could not create dir `' + app_name + '`', err);

      app.log('Created app dir `' + app_name + '`');

      app.tasks.f_next();
    });

  });
};