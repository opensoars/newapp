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
app.name = app.argv[4];
app.projects_dir = __dirname + '/projects'

app.log = new Ezlog(['[newapp]', 'yellow', 'bold']);
app.logErr = new Ezlog(['[newapp]', 'yellow', 'bold'], ['red']);


/**
 * App tasks namespace
 */
app.tasks = {};


/**
 * App helper namespace
 */
app.helpers = {};



/**
 * Require all tasks
 */
[
  'testWantedApp',
  'createAppDir',
  'copyProject',
]
.forEach(function (task){
  app.tasks[task] = require('./lib/tasks/' + task + '.js');
});


/**
 * Require all helpers
 */
[
  'copyFile',
  'createDir',
  'checkDir'
]
.forEach(function (helper){
  app.helpers[helper] = require('./lib/helpers/' + helper + '.js');
});


/**
 * Require app f_ starter
 */
app.start = require('./lib/start.js');



/**
 * Augment tasks object so it gets f_ methods
 */
app.tasks = f_.augment(app.tasks, {
  functionFlow: ['testWantedApp', 'createAppDir', 'copyProject'],
  desc: 'newapp',
  toLog: ['none']
});


/**
 * Setup tasks object so it gets f_ properties
 */
app.tasks = f_.setup( app.tasks );


/**
 * Update global app variable
 */
process.app = app;


/**
 * Start tasks
 */
app.start();


