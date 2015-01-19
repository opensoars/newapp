/**
 * Copies a file
 *
 * @param src    {string}  File to copy
 * @param target {string}  Location to write
 */
module.exports = function(src, target){
  var app = process.app,
      fs = app.fs;

  fs.readFile(src, function (readErr, data){
    if(readErr) return app.logErr('Could not read: ' + src, readErr);

    // Fill template
    data = app.helpers.fillTemplate(data, app);

    fs.writeFile(target, data, function (writeErr){
      if(writeErr) return app.logErr('Could not write: ' + target, writeErr);
      app.log('Created file: ' + target);
    });

  });
};