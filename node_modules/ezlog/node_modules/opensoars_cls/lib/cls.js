/**
 * Style map
 *
 * @private
 * @prop s {map}  Style codes
 * @prop c {map}  Color codes
 */
var SM = {

  s: {
    'bold':          ['\x1B[1m', '\x1B[22m'],
    'italic':        ['\x1B[3m', '\x1B[23m'],
    'underline':     ['\x1B[4m', '\x1B[24m'],
    'inverse':       ['\x1B[7m', '\x1B[27m'],
    'strikethrough': ['\x1B[9m', '\x1B[29m']
  },

  c: {
    'white'     : ['\x1B[37m', '\x1B[39m'],
    'grey'      : ['\x1B[90m', '\x1B[39m'],
    'black'     : ['\x1B[30m', '\x1B[39m'],
    'blue'      : ['\x1B[34m', '\x1B[39m'],
    'cyan'      : ['\x1B[36m', '\x1B[39m'],
    'green'     : ['\x1B[32m', '\x1B[39m'],
    'magenta'   : ['\x1B[35m', '\x1B[39m'],
    'red'       : ['\x1B[31m', '\x1B[39m'],
    'yellow'    : ['\x1B[33m', '\x1B[39m']
  }

};


/**
 * Text styler
 *
 * @public
 * @param t      {string|object}  Text to style
 * @param [c]    {string}         Text color
 * @param [s]    {string|array}   Text style(s)
 * @return t     {string}         Styled string 
 */
function cls(t, c, s){

  // If t is not set, we default to an empty string
  if(!t && t !== 0 && t !== false)
    t = '';

  // If c is not set or it's not of type string, default to empty string
  if(typeof c !== 'string')
    c = '';

  if(typeof t === 'object')
    t = JSON.stringify(t);

  // If a color is found matching c, apply it
  if(SM.c[c])
    t = SM.c[c][0] + t + SM.c[c][1];

  // If s is passed, apply style(s)
  if(s){
    // If we're dealing with an array of style strings, apply them
    // else we simply apply a single style
    if(s.constructor === Array)
      s.forEach(function (s_type){
        if(SM.s[s_type])
          t = SM.s[s_type][0] + t + SM.s[s_type][1]
      });
    else if(typeof s === 'string')
      if(SM.s[s])
        t = SM.s[s][0] + t + SM.s[s][1];
  }

  return t;
}

module.exports = cls;
