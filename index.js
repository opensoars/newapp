var f_ = require('f_'),
    Ezlog = require('Ezlog'),
    fs = require('fs');

/**
 * App namespace
 * At the end of this file we update process.app the
 * with our local app variable
 */
var app = {};
process.app = {};

/**
 * App variables
 */
app.argv = process.argv;
app.cd = app.argv[2];
app.wanted = app.argv[3];
app.projects_dir = __dirname + '/projects'

app.log = new Ezlog(['[newapp]', 'yellow', 'bold']);
app.logErr = new Ezlog(['[newapp]', 'yellow', 'bold'], ['red']);


/**
 * App tasks constructor
 */
app.tasks = {};

/**
 * tasks method start
 */
app.tasks.start = function (){
  this.f_next();
};

/**
 * tasks method testWantedApp
 */
app.tasks.testWantedApp = function (){

  var self = this;

  if(!app.wanted)
    return app.logErr('Please specify app type to build, i.e: newapp node');

  fs.readdir(app.projects_dir, function (err, project_types){
    if(err) return app.logErr('Could not read project types folder', err);

    if(project_types.indexOf(app.wanted) === -1)
      return app.logErr('`' + app.wanted + '` is not a known project type');

    app.log('`' + app.wanted + '` is a known project type');

    self.f_next();
  });
};

app.tasks.copyDir = function (){
  app.log('Creating a `' + app.wanted + '` project in ' + app.cd);
  app.tasks.checkDir(app.projects_dir + '/' + app.wanted, app.cd);
  this.f_next();
};


app.tasks.copyFile = function(source, target){
  fs.readFile(source, function (readErr, data){
    if(readErr) return app.logErr('Could not read: ' + source, readErr);

    fs.writeFile(target, data, function (writeErr){
      if(writeErr) return app.logErr('Could not write: ' + target, writeErr);
      app.log('Created file: ' + target);
    });

  });
};

app.tasks.createDir = function (src, target){
  fs.mkdir(target, function (err){
    if(err) return app.logErr('Could nog create dir', err);
    app.tasks.checkDir(src, target);

    app.log('Created dir:  ' + target);
  });
}

app.tasks.checkDir = function (dir, target){

  fs.readdir(dir, function (err, files){
    if(err) return app.logErr('Could not read dir', err);

    files.forEach(function (file){

      var src = dir + '/' + file;
      
      fs.stat(src, function (err, stats){
        if(stats.isDirectory())
          app.tasks.createDir(src, target + '/' + file);
       else
          app.tasks.copyFile(src, target + '/' + file);
      });
    });

  });

};


/**
 * Augment tasks constructor
 */
app.tasks = f_.augment(app.tasks, {
  functionFlow: ['testWantedApp', 'copyDir'],
  desc: 'newapp',
  toLog: ['none']
});


app.tasks = f_.setup( app.tasks );

app.tasks.start();


process.app = app;