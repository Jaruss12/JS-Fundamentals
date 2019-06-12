//  Object.keys() and Object.values()

// Object.keys() is a method that returns an array of a given objects own property name

//  Object.values() is a method that returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

// let spaceJam = {
//     toonSquad: {
//       human: 'Michael Jordan',
//       rabbit1: 'Bugs Bunny',
//       rabbit2: 'Lola Bunny',
//       duck: 'Daffy Duck',
//       tDevil: 'Tasmanian Devil',
//       bird: 'Tweety',
//       cat: 'Sylvester',
//       pig: 'Porky Pig'
//     },
//     monstars: {
//       0: 'Bupkus',
//       1: 'Bang',
//       2: 'Nawt',
//       3: 'Pound',
//       4: 'Blanko'
//     },
//     nbaPlayers: {
//       phoenixSuns: 'Charles Barkley',
//       newJerseyNets: 'Shawn Bradley',
//       newYorkNicks: 'Patrick Ewing',
//       charlotteHornets1: 'Larry Johnson',
//       charlotteHornets2: 'Muggsy Bogues'
//     }
//   }

//   console.log(Object.keys(spaceJam.toonSquad))
//   console.log(Object.keys(spaceJam.toonSquad.duck))
// // 

// console.log(Object.values(spaceJam.toonSquad));

// //* Square Bracket Notation

let garden = {
    vegetable:'zucchini',
    flower:'sun flower',
    fruit:'apple',
    water:true,
    sun:true,
    size:10,
    doSomething: function(){console.log("hello world")}
}

// console.log(garden.water);

// let x = 'vegetable'
// console.log(garden[x]);
// console.log(garden.vegetable);

// let baking = {};
// baking['zucchini'] = 'better make some bread!';
// // console.log(baking.garden.vegetable);
// console.log(baking[garden['vegetable']]);



let key = 'vegetable';
Object.values(garden).forEach(g =>{
    //console.log(g)
    if(key === g){
        console.log(`Key = ${g}
        value = ${garden[g]}
        `)
    }
})

console.log(Object.values(garden))
//console.log(typeof(garden.doSomething));


function pigLatin(){

   let word1 = 'Pig'
   let word2 = 'Latin' 
   let x = 'ay'
    if((word1.charAt(0) == 'a' ||
  word1.charAt(0) == 'e' ||
  word1.charAt(0) == 'i' ||
  word1.charAt(0) == 'o' ||
  word1.charAt(0) == 'u')){
      return word.concat(x)
  }else{
      let fLetter = word1.charAt(0);
      let newWord = word1.slice(1);
      let fLetter2 = word2.charAt(0);
      let newWord2 = word2.slice(1);
      console.log( newWord.concat(fLetter,x), newWord2.concat(fLetter2,x));
  }
}

console.log(pigLatin());



let suffix = ['st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th']

let colors = ['red','orange','yellow','green','blue','indigo','violet','pink','brown','black']

function orderedColor(color, suff){

color.forEach((c,n) => {
    console.log(`${n+1}${suff[n]} is ${c}`)
})
}

orderedColor(colors, suffix)

