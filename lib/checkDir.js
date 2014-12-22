module.exports = function (dir, target){
  var app = process.app,
      fs = app.fs;

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