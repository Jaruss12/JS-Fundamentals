let student = {
    name: 'peter',
    awesome: true,
    degree:'Javascript',
    week:1
}

for (item in student){
    console.log(item);
    console.log(student[item])
}

let dogs = [
    'collie','pitbull','newfie','lab','dachshund'
]

for(dog in dogs){
    console.log (dogs[dog]);
}
//challenge

let names = 'suraj'
let capName = '';

for(let n in names){
    if(n==0){
        capName += names[n].toUpperCase();
    }else{
        capName += names[n].toLowerCase();
    }
}
console.log(capName);