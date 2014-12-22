module.exports = function (src, target){
  var app = process.app,
      fs = app.fs;
  
  fs.mkdir(target, function (err){
    if(err) return app.logErr('Could nog create dir', err);
    app.tasks.checkDir(src, target);

    app.log('Created dir:  ' + target);
  });
};