/**
 * Recursive dir checker
 * Checks a directory for files
 * Loops through files, if its a folder, call this function
 * again with updated dir argument
 *
 * @param dir    {string}  Sample project dir
 * @param target {string}  The (updated) target to write
 */
module.exports = function (dir, target){
  var app = process.app,
      fs = app.fs;

  fs.readdir(dir, function (err, files){
    if(err) return app.logErr('Could not read dir', err);

    files.forEach(function (file){

      var src = dir + '/' + file;
      
      fs.stat(src, function (err, stats){
        if(stats.isDirectory())
          app.helpers.createDir(src, target + '/' + file);
        else
          app.helpers.copyFile(src, target + '/' + file);
      });
    });

  });

};