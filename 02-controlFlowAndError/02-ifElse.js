//*If else statement

/*
if(condition){
    console.log();
}else{
    console.log();
};
*/

let weather = 70

if(weather<70){
    console.log('wear a Jacket');
}else{
    console.log('No Jacket necessary');
};

//challenge
//Bronze level
let myName = 'Ned Stark';

if(myName=='Suraj Marakani'){
    console.log(myName);
}else{
    console.log('Hello, what is your name?');
};
//Silver level
let myName = 'Suraj Marakani';

if(myName=='Suraj Marakani'){
    console.log('Hello, my name is',myName);
}else{
    console.log('Hello, what is your name?');
};
//Gold level
let myName='Tyrion Lannister'

let myRealName='Suraj Marakani'

if(myName=='Suraj Marakani'){
    console.log(myName);
}else{
    console.log('Hello, is your name',myRealName);
};

//challenge 2
//Bronze level
let name = 'aUTuMN'
let letter = name.charAt(0); 
if(letter==letter.toUpperCase){
    console.log(name);
}else{
    console.log('hey it is not written correctly')
}
//Silver level
let name = 'aUTuMN'
let fLetter = name.charAt(0); 
let rLetter = name.slice(1);
if(fLetter=='A'){
    console.log(name[0]); //will display a
}else{
    let ame = name.replace(name[0],'');
        console.log(ame.toLowerCase());
    
    }
//Gold level
let name = 'aUTuMN'
let letter = name.charAt(0); 
if(letter==letter.toUpperCase){
    console.log(name.toLowerCase());
}else{
    let ame = name[0].toUpperCase()+name.replace(name[0].toLowerCase());
    console.log(ame)
}

//challenge 3
let age = 22

if (age <= 17) {
    console.log("Sorry, you're too young to do anything");}
  if (age>= 18) {
       console.log('yay! you can vote');
  
    if (age>=21){
          console.log('yay! you can drink!');
          if(age>=25){
              console.log('yay! you can rent a car')
          }
    }
}

  