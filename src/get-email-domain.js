const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let point;
  let inp=email.split("");
  for (let i =0;i<inp.length;i++){
    if (inp[i] === "@"){
      point = i;
    }
  }
  let domain = inp.splice(point+1).join("");
  return domain;
}

module.exports = {
  getEmailDomain
};
