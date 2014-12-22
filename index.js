var f_ = require('f_'),
    Ezlog = require('Ezlog');

/**
 * App namespace
 * At the end of this file we update process.app the
 * with our local app variable
 */
var app = {};
process.app = {};

/**
 * App modules
 */
app.fs = require('fs');

/**
 * App variables
 */
app.argv = process.argv;
app.cd = app.argv[2];
app.wanted = app.argv[3];
app.projects_dir = __dirname + '/projects'

app.log = new Ezlog(['[newapp]', 'yellow', 'bold']);
app.logErr = new Ezlog(['[newapp]', 'yellow', 'bold'], ['red']);


/**
 * App tasks constructor
 */
app.tasks = {};

/**
 * tasks method start
 */
app.tasks.start = function (){
  this.f_next();
};


app.tasks.testWantedApp = require('./lib/testWantedApp.js');
app.tasks.copyDir = require('./lib/copyDir.js');
app.tasks.copyFile = require('./lib/copyFile.js');
app.tasks.createDir = require('./lib/createDir.js');
app.tasks.checkDir = require('./lib/checkDir.js');


/**
 * Augment tasks constructor
 */
app.tasks = f_.augment(app.tasks, {
  functionFlow: ['testWantedApp', 'copyDir'],
  desc: 'newapp',
  toLog: ['none']
});


app.tasks = f_.setup( app.tasks );


process.app = app;


app.tasks.start();


