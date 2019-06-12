const instructors = [
    { first: "Autumn", last: "Henderson", language: "JS", powerLevel: 200 },
    { first: "Alecx", last: "Moritz", language: "JS", powerLevel: 176 },
    { first: "David", last: "Whitt", language: "JS", powerLevel: 198 },
    { first: "Tyler", last: "Shelton", language: "JS", powerLevel: 234 },
    { first: "Ingeborg", last: "Slegers", language: "JS", powerLevel: 182 },
    { first: "Zachary", last: "Maynard", language: "JS", powerLevel: 167 }
  ];
  //Use the array provided for each challenge. If you dont know how to use these array methods, look them up on MDN or
  //another sight. CONSOLE LOG THE ANSWER.
  
   // Array.prototype.filter() 
   // 1. Filter the list of inventors for those who have a powerlevel over 175.

   let over175 = instructors.filter(val => val.powerLevel >175)
      console.log(over175)

       
   
    //Array.prototype.map()
    //2. Give us an array of the instructors' first and last names
 
     let g = instructors.map(n=> `${n.first} ${n.last} ` )
  console.log(g);

  // Array.prototype.sort() 
  // 3. Sort the instructors by powerlevel, highest to lowest
  console.log( instructors.sort(function(a,b){
      return b.powerLevel - a.powerLevel
  }));
 
  // Array.prototype.reduce()
//   // 4. What is the cumulative power level of all of the instructors?
     console.log(instructors.reduce((powerLevelTotal, intructor) => {
         return powerLevelTotal + intructor.powerLevel;
     },0));
    
  
  
  
  
  // 5. What is the average powerlevel of the instructors.
   let sum =  instructors.reduce((powerLevelTotal, intructor) => {
     return powerLevelTotal + intructor.powerLevel;
 },0);
      let avg = sum / instructors.length;
      console.log(avg)
  
  const people = [
    "Beck, Mary",
    "Becker, Heather",
    "Beckett, Emily",
    "Beddoes, Chris",
    "Beecher, Alex",
    "Beethoven, Nikki",
    "Begin, Jac",
    "Belloc, Abi",
    "Bellow, Chris",
    "Benchley, Doug",
    "Benenson, Sean",
    "Ben-Gurion, Jon",
    "Benjamin, Megan",
    "Benn, Robin",
    "Bennington, Sean",
    "Benson, Scott",
    "Bent, Silas",
    "Bentsen, Lloyd",
    "Berger, Ric",
    "Bergman, Ingmar",
    "Berio, Luciano",
    "Berle, Milton",
    "Berlin, Irving",
    "Berne, Eric",
    "Bernhard, Sandra",
    "Berra, Yogi",
    "Berry, Halle",
    "Berry, Wendell",
    "Bethea, Erin",
    "Bevan, Aneurin",
    "Bevel, Ken",
    "Biden, Joseph",
    "Bierce, Ambrose",
    "Biko, Steve",
    "Billings, Josh",
    "Biondo, Frank",
    "Birrell, Augustine",
    "Black, Elk",
    "Blair, Robert",
    "Blair, Tony",
    "Blake, William"
  ];
  // 6. sort Exercise
  // Sort the people alphabetically by last name
  let sorted = people.sort();
  console.log(sorted)