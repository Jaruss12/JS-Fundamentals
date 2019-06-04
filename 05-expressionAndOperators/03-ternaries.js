let w=6;

if(w>0){
    console.log('yes');
}else{
    console.log('no');
}

//ternary
(w>0) ? console.log('yes') : console.log('no');

//else if ternary
(w==0) ? console.log('hello') : (w<0) ? console.log('hi') : console.log('goodbye');

//challenge
var age = 30;

(age >=25) ? console.log('yay! you can rent a car') : (age >=21) ? console.log('yay! you can drink') : (age >=18) ? console.log('yay! you can vote') :console.log('sorry, you are too young to do anything.');