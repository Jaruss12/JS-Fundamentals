/**************************
FAT ARROW FUNCTIONS
*********************
let hi = ()   => {
      (1)     (2)
  console.log('hi')
};

1- We need to set the fat arrow function to a variable
2- We use the 'fat arrow' to signify its a function


Consice
*********************
let hi = () => console.log('hi');

Block Body
*********************
let hi = () => {
  console.log('hi')
}

*/ 

//normal function
function coffee(){
    console.log('coffee is lyfe');
}

//fat arrow coffee consice
let coffee2 = () => console.log('coffee is lyfe');

//fat arrow coffee
let coffee2 = () => {
    console.log('coffee is lyfe');
}

let cats = (kittens,puppies) => {
    console.log(`I have ${kittens}cats and ${puppies}dogs`)
}

cats(12,4)

/**************************
RETURN
***************

let hi = () => {
  return 'hi';
    (1)
};

let newName = hi();
      (2)      (3)

console.log(newName)

1- The keyword that brings our data out of our function
2- We need a new variable to hold the value of the return
3- When called, the function becomes the value of the return



***********/


const price = 17;
let tipCalculator = (x) => {
    x*= 0.20
    let tip = x;
    return tip
}

let yourTip = tipCalculator(price);

console.log (yourTip);
