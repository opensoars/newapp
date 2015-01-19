/**
 * Checks if the wanted app is supported
 */
module.exports = function (){
  var app = process.app,
      fs = app.fs;

  fs.readdir(app.projects_dir, function (err, project_types){
    if(err) return app.logErr('Could not read project types folder', err);

    if(project_types.indexOf(app.wanted) === -1)
      return app.logErr('`' + app.wanted + '` is not a known project type');

    app.log('`' + app.wanted + '` is a known project type');
    console.log('');

    app.tasks.f_next();
  });
}