/**
 * Get command line arguments
 * Gets all arguments from position 4 to argv.length
 * Format: "key=value"
 */

module.exports = function (){
  var app = process.app;

  app.cd = app.argv[2];
  app.wanted = app.argv[3];

  // Is the wanted app type specified?
  if(!app.wanted)
    return app.logErr('Please specify app type to build, i.e: newapp node');

  var arg_arr = app.argv.splice(4, app.argv.length);

  if(arg_arr.length !== 0){
    app.log('Got template arguments:');

    arg_arr.forEach(function (arg){
      var key = arg.split('=')[0],
          value = arg.split('=')[1];

      console.log('         * ' + key + ': ' + value);

      app.template_handles[key] = value;
    });

    console.log('');
  }

  // Is the app name specified?
  if(!app.template_handles.name)
    return app.logErr('Please specify a name for the app, i.e: '
      + 'newapp node "name=my app name"');

  this.f_next();
};