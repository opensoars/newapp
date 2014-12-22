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
 * App tasks object namespace
 */
app.tasks = {};


/**
 * Require all lib files (tasks methods)
 */
[
  'start',
  'testWantedApp',
  'copyDir',
  'copyFile',
  'createDir',
  'checkDir'
]
.forEach(function (lib){
  app.tasks[lib] = require('./lib/' + lib + '.js');
});


/**
 * Augment tasks object
 */
app.tasks = f_.augment(app.tasks, {
  functionFlow: ['testWantedApp', 'copyDir'],
  desc: 'newapp',
  toLog: ['none']
});

/**
 * Setup tasks object
 */
app.tasks = f_.setup( app.tasks );

/**
 * Update global app
 */
process.app = app;

/**
 * Start tasks
 */
app.tasks.start();


