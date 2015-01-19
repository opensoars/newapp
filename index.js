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
app.projects_dir = __dirname + '/projects'


/**
 * App logger functions
 */
app.log = new Ezlog(['[newapp]', 'yellow', 'bold']);
app.logErr = new Ezlog(['[newapp]', 'yellow', 'bold'], ['red']);


/**
 * App template data namespace
 */
app.template_handles = {};


/**
 * App tasks namespace
 */
app.tasks = {};


/**
 * App helper namespace
 */
app.helpers = {};


/**
 * App f_ tasks
 * Used in task requires and as functionFlow argument @augment
 */
app.f_tasks = [
  'getCla',
  'testWantedApp',
  'createAppDir',
  'copyProject'
];


/**
 * Require all tasks
 */
app.f_tasks.forEach(function (task){
  app.tasks[task] = require('./lib/tasks/' + task + '.js');
});


/**
 * Require all helpers
 */
[
  'copyFile',
  'fillTemplate',
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
 * Setup tasks object so it gets f_ properties
 */
app.tasks = f_.setup( app.tasks );


/**
 * Augment tasks object so it gets f_ methods
 */
app.tasks = f_.augment(app.tasks, {
  functionFlow: app.f_tasks,
  desc: 'newapp',
  toLog: ['none']
});


/**
 * Update global app variable
 */
process.app = app;


/**
 * Start tasks
 */
app.start();


