/**
 * Keep it sync!
 * Fills a template
 *
 * @param template  {string}  Template to fill
 * @param data      {object}  Data to fill template with
 * @return {string}  Filled template
 */
module.exports = function (template, data){
  var app = process.app;

  var template_str = template.toString(),
      handles = template_str.match(/\{.+\}/g);

  if(handles !== null)
    handles.forEach(function (handlebar){

      var handle_name = handlebar.replace(/[\{\}]/g, '');

      var handle_value = app.template_handles[handle_name];

      if(handle_value){
        var handle_re = new RegExp(handlebar, 'g');
        template_str = template_str.replace(handle_re, handle_value);
      }

    });

  return template_str;
};