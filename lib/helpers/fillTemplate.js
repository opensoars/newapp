/**
 * Keep it sync!
 * Fills a template
 * Gets data from app.template_handles
 * Replaces {{key}} with the value in app.template_handles
 *
 * @param template  {string}  Template to fill
 * @param data      {object}  Data to fill template with
 * @return {string}  Filled template
 */
module.exports = function (template, data){
  var app = process.app;

  var template_str = template.toString(),
      handles = template_str.match(/\{\{.+?\}\}/g);

  if(handles !== null)
    handles.forEach(function (handlebar){

      var handle_name = handlebar.replace(/[\{\}]/g, ''),
          handle_value = app.template_handles[handle_name];

      // If a value is found for a handle, replace the handle with the value
      if(handle_value){
        var handle_re = new RegExp(handlebar, 'g');
        template_str = template_str.replace(handle_re, handle_value);
      }
      // If no value is found, log about handles that could not be filled
      // Timeout used so it won't log in the middle of dir/file logging
      else{
        setTimeout(function (){
          app.log('Handle `{{' + handle_name + '}}` could not be filled'
            + ' with data, since no data was given.');
        }, 100);
      }

    });

  return template_str;
};