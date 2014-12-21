var Ezlog = require('Ezlog'),
    log = new Ezlog(['[newapp]', 'yellow']),
    logErr = new Ezlog(['[newapp]', 'yellow'], ['red']);


var argv = process.argv;

if(!argv[2])
  return logErr('Please specify what to build, i.e: `newapp node`');


var fs = require('fs');

