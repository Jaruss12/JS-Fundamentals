//hw for 06-05-2019
let word = 'racecar'

function checker(word){
    let strLen = word.length;
  word = word.toLocaleLowerCase();

  if (strLen === 0 || strLen === 1) {
    return true;
  }
  if (word[0] === word[strLen - 1]) {
    return checker(word.slice(1, strLen - 1) );
  }  
  
};
let output = checker(word)

      if(output == true){
        console.log(word);
      }else {
        console.log('This is not a Palindrone');
      }


