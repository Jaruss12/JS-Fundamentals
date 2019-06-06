/**************************
CALLING FUNCTIONS
*************************
function hi() {
  console.log('HI');
}

hi();
(1);

1- This is how we call, or 'invoke' our function


*/

function hi(){
    console.log('HI');
    return 'hi';
}


console.log(hi())

//challenge
function numberList(){
  for(i=1;i<11;i++){
    console.log(i)
  }
return '';
}
console.log(numberList()) //need return cmd
numberList(); // doesnt need return

//challenge 2
let arr = ['This','is','really','cool']

function list(){
  for (words of arr){
    console.log(words);
}
}
list();