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
      handlebars = template_str.match(/\{.+\}/g);

  if(handlebars !== null)
    handlebars.forEach(function (handlebar){

      var handlebar_name = handlebar.replace(/[\{\}]/g, '')
        .replace(/app\./, '');

      if(app[handlebar_name]){
        var handlebar_re = new RegExp(handlebar, 'g');
        template_str = template_str.replace(handlebar_re, app[handlebar_name]);
      }
    });

  return template_str;
};