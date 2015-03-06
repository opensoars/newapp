/**
 * Creates a dir
 *
 * @param src    {string}  Folder to copy
 * @param target {string}  Location to write
 */
module.exports = function (src, target){
  var app = process.app,
      fs = app.fs;

  // If a dirname has a handlebar, process it
  if(/\{\{.+?\}\}/.test(target))
    target = app.helpers.fillTemplate(target, target);

  fs.mkdir(target, function (err){
    if(err) return app.logErr('Could not create dir', err);
    app.helpers.checkDir(src, target);

    console.log('         Dir:  ' + target);
  });
};