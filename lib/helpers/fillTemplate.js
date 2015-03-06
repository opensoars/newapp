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
module.exports = function (template, target){
  var app = process.app;

  var template_str = template.toString(),
      handles = template_str.match(/\{\{.+?\}\}/g);


  if(handles !== null){
    handles.forEach(function (handlebar){
      var handle_name = handlebar.replace(/[\{\}]/g, ''),
          handle_value = app.template_handles[handle_name],
          handle_re = new RegExp(handlebar, 'g');

      // If a value is found for a handle, replace the handle with the value
      if(handle_value){
        
        // Template has handlebar, fill handlebar
        if(handle_re.test(template_str))
          template_str = template_str.replace(handle_re, handle_value);
      }
      else { // no argument given, remove handlebar. 
        template_str = template_str.replace(handle_re, '');
        
        // Timeout so we log at bottom
        setTimeout(function (){
          app.log('No data for {{' + handle_name + '}} in ' + target);
        }, 100);
      }

    });
  }

  return template_str;
};