var cls = require('opensoars_cls');


/**
 * Top level constructor to draw insances from
 *
 * @param p_o {array}    Prefix options
 * @param t_o {array}    Text options
 * @return    {function} Logger function that's a closure over params
 */
function Ezlog(p_o, t_o){
  // Default to proper array
  p_o = p_o || ['', '', ''];
  t_o = t_o || ['', ''];

  // Default to type array
  if(p_o instanceof Array === false) p_o = ['', '', ''];
  if(t_o instanceof Array === false) t_o = ['', ''];

  // Individual element checking and empty string defaults
  if(!p_o[0]) p_o[0] = '';
  if(!p_o[1]) p_o[1] = '';
  if(!p_o[2]) p_o[2] = '';

  if(!t_o[0]) t_o[0] = '';
  if(!t_o[1]) t_o[1] = '';


  // Get the styled prefix from cls
  var pref = cls(p_o[0], p_o[1], p_o[2]);

  // Public function
  return function ezlog(){
    // Log for each argument passed
    for(var i=0, as=arguments; i<as.length; i+=1)
      console.log( pref, cls(as[i], t_o[0], t_o[1]) );
  };

}

module.exports = Ezlog;