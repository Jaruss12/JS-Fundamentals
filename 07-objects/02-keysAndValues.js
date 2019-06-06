//  Object.keys() and Object.values()

// Object.keys() is a method that returns an array of a given objects own property name

//  Object.values() is a method that returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop.

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }

//   console.log(Object.keys(spaceJam.toonSquad))
//   console.log(Object.keys(spaceJam.toonSquad.duck))
// 

console.log(Object.values(spaceJam.toonSquad));

//* Square Bracket Notation

let garden = {
    vegetable:'zucchini',
    flower:'sun flower',
    fruit:'apple',
    water:true,
    sun:true,
    size:10
}

// console.log(garden.water);

// let x = 'vegetable'
// console.log(garden[x]);
// console.log(garden.vegetable);

let baking = {};
baking['zucchini'] = 'better make some bread!';
// console.log(baking.garden.vegetable);
console.log(baking[garden['vegetable']]);