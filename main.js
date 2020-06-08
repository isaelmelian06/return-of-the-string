/*******************
 * YOUR CODE HERE! *
 *******************/

function yell(str){
  return str + "!";
}
console.log(yell("You"));


  function getFirstCharacter(str){
    return str[0];
  }
  console.log(getFirstCharacter("Hello"));

  function getLastCharacter(str){
    return str.charAt(str.length-1);
  }
  console.log(getLastCharacter("abcdefg"));
  

  function getOneCharacter(str,num){
    return str[num];
  }
  console.log(getOneCharacter('goood',2));
  

  function getTwoCharacters(str,numOne,numTwo){
    return str[numOne] + str[numTwo];
  
  }
  console.log(getTwoCharacters('I want a bagel!', 2, 11));
  


  function makeCapitalized(str){
    return str.toUpperCase();
  }
  console.log(makeCapitalized("word"));


  function yellLouder(str){
    return str.toUpperCase() +"!!!";
  }
console.log(yellLouder("hello"));



  
function getInitials(str){
  const ary = str.split(" ");
  const firstWord = ary[0];
  let lastWord = firstWord;
  if(ary.length > 1 ){
    lastWord = ary[1];
  }
  return firstWord[0] + "." + lastWord[0] + ".";
}

console.log(getInitials("Cat Dog Mouse"));



/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === 'undefined') {
  yell = undefined;
}

if (typeof getFirstCharacter === 'undefined') {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === 'undefined') {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === 'undefined') {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === 'undefined') {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === 'undefined') {
  makeCapitalized = undefined;
}

if (typeof yellLouder === 'undefined') {
  yellLouder = undefined;
}

if (typeof getInitials === 'undefined') {
  getInitials = undefined;
}


module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
