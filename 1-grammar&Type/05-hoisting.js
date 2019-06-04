//* hoisting

//console.log(scissors); undefined

scissors = 'blue';

//console.log(scissors); blue

b();
console.log(a);

function b(){
    console.log('this is all hoisted');
}

var a='this is not hoisted';

console.log(a);