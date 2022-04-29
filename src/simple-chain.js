const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */




 const chainMaker = {
  str:"",
  getLength() {
    let spl = this.str.split("~~").length;
    console.log(spl);
    return spl;
  },
  addLink(value) {
    value=String(value);
    if(this.str == ""){
      if (value == undefined){
        this.str +="( )";
      }
      else {this.str +="(" +" " + value + " " + ")"}
      console.log(this.str);
      return this;
    } 
    if (value == undefined){
      this.str += "~~" + "( )";
      console.log(this.str)
     return this;
    } else {
          this.str += "~~" + "(" +" " + value + " " + ")";
          console.log(this.str)
          return this;
    }
     

  },
  removeLink(position) {
    if (position !== Number(position) &&  !Number.isInteger(position) && position > (chainMaker.getLength-1)){
      throw new Error("You can't remove incorrect link!");
    }
let arr=[];
    let cook = this.str.split("~~");/* .splice(position,1).join("~~") */;
    for (let i =0;i<cook.length;i++){
      if (i == position-1) continue;
      arr.push(cook[i]);
    
    }
    this.str = arr.join("~~");
    return this;
  },
  reverseChain() {
    let x = this.str.split("~~");
    x.reverse();
    this.str = x.join("~~");
    console.log(this.str);
    return this;

  },
  finishChain() {
    return this;

  }
  
};





module.exports = {
  chainMaker
};
