var Ezlog = require('Ezlog'),
    log = new Ezlog(['[newapp]', 'yellow']),
    logErr = new Ezlog(['[newapp]', 'yellow'], ['red']);


var argv = process.argv;

if(!argv[2])
  return logErr('Please specify what to build, i.e: `newapp node`');


var fs = require('fs');


var data_folder = __dirname + '/data';


var project_types = fs.readdirSync(data_folder);


if(project_types.indexOf(argv[2]) === -1)
  return logErr('`' + argv[2] + '` is not a known project type');