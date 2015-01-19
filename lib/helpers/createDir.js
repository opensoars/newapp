/**
 * Creates a dir
 *
 * @param src    {string}  Folder to copy
 * @param target {string}  Location to write
 */
module.exports = function (src, target){
  var app = process.app,
      fs = app.fs;

  fs.mkdir(target, function (err){
    if(err) return app.logErr('Could nog create dir', err);
    app.helpers.checkDir(src, target);

    console.log('         Dir:  ' + target);
  });
};