/**
 * Copies a file
 *
 * @param src    {string}  File to copy
 * @param target {string}  Location to write
 */
module.exports = function(src, target){
  var app = process.app,
      fs = app.fs;

  // If filename is .keep, dont copy it
  if(/\.keep$/.test(target))
    return;

  // If a filename has a handlebar, process it
  if(/\{\{.+?\}\}/.test(target))
    target = app.helpers.fillTemplate(target, target);

  fs.readFile(src, function (readErr, data){
    if(readErr) return app.logErr('Could not read: ' + src, readErr);

    // Fill template
    data = app.helpers.fillTemplate(data, target);

    fs.writeFile(target, data, function (writeErr){
      if(writeErr) return app.logErr('Could not write: ' + target, writeErr);

      console.log('         File: ' + target);
    });

  });
};