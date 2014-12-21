var Ezlog = require('Ezlog'),
    log = new Ezlog(['[newapp]', 'yellow']),
    logErr = new Ezlog(['[newapp]', 'yellow'], ['red']);


var argv = process.argv,
    cd = argv[2],
    supl_proj_type = argv[3];

// Did we get a project type?
if(!supl_proj_type)
  return logErr('Please specify what to build, i.e: `newapp node`');


var fs = require('fs');

// Where our project types are stored
var data_folder = __dirname + '/data';


// Get project types from data folder
var project_types = fs.readdirSync(data_folder);

// Is the project specified supported?
if(project_types.indexOf(supl_proj_type) === -1)
  return logErr('`' + supl_proj_type + '` is not a known project type');

log('`' + supl_proj_type + '` is a known project type');


/**
 * Read dir
 * if item is dir re-call read dir
 * else copy
 */

function copyItem(source, target){

  fs.readFile(source, function (err, data){
    if(err) return logErr('Could not read: ' + source, err);

    fs.writeFile(target, data, function (err){
      if(err) return logErr('Could not write: ' + target, err);
    });

  });
}


function read(){

}


(function copyDir(dir){

  fs.readdir(dir, function (err, items){
    if(err) return logErr('Could not read: ' + dir, err);

    items.forEach(function (item){
      fs.stat(dir + '/' + item, function (err, stats){
        if(stats.isDirectory())
          copyDir(dir + '/' + item);
       else
          copyItem(dir + '/' + item, cd + '/' + item);
      })
    });

  });

}(data_folder + '/' + supl_proj_type));