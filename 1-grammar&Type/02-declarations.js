/*what is a variable? Variables are named containers for storing data values.
    We name variables so that we can refer to this data again
*/

    let     a      =       2;
/*  (1)    (2)    (3)     (4)

1-keyword
2-variable name
3-assignent operator
4-variable value

*/
let b = 1
console.log(a+b)

/*notes on variables:
//1) A variable name must begin with a letter, underscore, or dollar sign
//2) Numbers may follow the above characters, but cannot come first
//3) JavaScript is case sensitive-- 'hello' and 'HeLlo' are different variables
//4) No spaces are allowed in variable names
//5) camelCase is the best practice for naming variables. 
This is good practice because it helps keep variables readable-- var myName = 'Suraj'; 
*/

/*
Var, Let, and Const:

Var= 'old'keyword for variables **We wont be using this as often. If you have prior
coding experience and used var in the past, thats ok, but we want to try to stay in let

Let = 'new' keyword for variables (introduced in newer js)For now best practice to use let

const = also 'new'; declares unchangable variables */


/*
Declarations are the LEFT SIDE of a variable
  It is simply the var x
  It is on the left side of the assignment operator (=)
Initializations are the RIGHT SIDE of a variable
  It sets the value of the variable
  It incorporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
*/

let x;
console.log('Declaration:',x); //Declaration: undefined

x=10;
console.log('initialization 1:', x); //initialization 1: 10

x=33;
console.log('initialization 2:', x); //initialization 2: 33

let y='Hello';
console.log('Both:',x,y); //Both: 33 Hello

let today = 'great!';
const elevenFifty = 'Wonderful!';
console.log(today,elevenFifty);

today = 'lovely!';
console.log(today,elevenFifty);

// elevenFifty = 'Super'; control + ? notes a line
// console.log(today,elevenFifty); this is error cuz const is being changed