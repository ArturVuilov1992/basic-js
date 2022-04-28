const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(team) {
  let newArr=[];
  if (Array.isArray(team)){
    for (let i = 0; i <team.length;i++){
      
        if (typeof(team[i]) == "string"){
          for (let j=0;j<team[i].length;j++){
            if(team[i][j] !== " "){
                            newArr.push(team[i][j].toLowerCase());
                            break;

            }
          }
        }
      
    }
     return newArr.sort().map(item => item = item.toUpperCase()).join("")
  }
  else {
    return false;
  }
}

module.exports = {
  createDreamTeam
};
