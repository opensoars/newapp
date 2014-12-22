var Ezlog = require('Ezlog'),
    log = new Ezlog(['[newapp]', 'yellow']),
    logErr = new Ezlog(['[newapp]', 'yellow'], ['red']);


var argv = process.argv,
    called_from = argv[2],
    supl_proj_type = argv[3];

// Did we get a project type?
if(!supl_proj_type)
  return logErr('Please specify what to build, i.e: `newapp node`');


var fs = require('fs');

// Where our project types are stored
var data_folder = __dirname + '/data';


fs.readdir(data_folder, function (err, project_types){
  if(err) return logErr('Could not read project types folder', err);

  // Is the project specified supported?
  if(project_types.indexOf(supl_proj_type) === -1)
    return logErr('`' + supl_proj_type + '` is not a known project type');

  log('`' + supl_proj_type + '` is a known project type');

  // If we're all set, 
  checkDir(data_folder + '/' + supl_proj_type, called_from);
});



/**
 * Read dir
 * if item is dir re-call read dir
 * else copy
 */

function copyFile(source, target){

  //console.log('copyFile', source, target);

  fs.readFile(source, function (readErr, data){
    if(readErr)return logErr('Could not read: ' + source, readErr);

    fs.writeFile(target, data, function (writeErr){
      if(writeErr) return logErr('Could not write: ' + target, writeErr);
    });
  });
}


/**
 * Read dir
 * if item is dir re-call read dir
 * else copy
 */

function copyFile(source, target){

  //console.log('copyFile', source, target);

  fs.readFile(source, function (readErr, data){
    if(readErr) return logErr('Could not read: ' + source, readErr);

    fs.writeFile(target, data, function (writeErr){
      if(writeErr) return logErr('Could not write: ' + target, writeErr);
    });

  });
}


function checkDir(dir, target){

  fs.readdir(dir, function (err, items){
    if(err) return logErr(err);

    items.forEach(function (item){

      var src_path = dir + '/' + item;

      fs.stat(src_path, function (err, stats){
        if(stats.isDirectory()){

          create_target = target + '/' + item;

          fs.mkdir(create_target, function (err){
            if(err) return logErr(err);
            checkDir(src_path, create_target);
          });
        } 
       else
          copyFile(src_path, target + '/' + item);
      });
    });

  });

}