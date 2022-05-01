const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

 function repeater(str, options ) {
let sum="";
if (options.separator === undefined){
  options.separator = "+";
}
 if (options.repeatTimes === 0){
    return "";
  
} 
if (options.repeatTimes ===1){
  return str;
  }

 if (options.repeatTimes > 1){
   
  for(let i=1;i<options.repeatTimes;i++){
     sum += `${str}${options.separator}`;
     if(options.repeatTimes-i===1)
       sum+=str;
     }
  }
  return sum;

 }

module.exports = {
  repeater
};
