module.exports = function(source, target){
  var app = process.app,
      fs = app.fs;

  fs.readFile(source, function (readErr, data){
    if(readErr) return app.logErr('Could not read: ' + source, readErr);

    fs.writeFile(target, data, function (writeErr){
      if(writeErr) return app.logErr('Could not write: ' + target, writeErr);
      app.log('Created file: ' + target);
    });

  });
};