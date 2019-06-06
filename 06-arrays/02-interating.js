// Iteratinglet food = 

//  forEach() method executes a provided function once for each array element

// forEach() has three arguments: currentValue, the index, and the entire array.
//  currentValue = the current element being processed in the array
//  index = the index of the current element being processed 
//  array = the array the forEach method was called upon

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

// food.forEach(f => { console.log(f); });
// food.forEach((f, number) => {console.log(number); console.log(f); })
food.forEach((f, number, array) => {console.log(number); console.log(f);  console.log(array)});

let foodFunction = () => {
  for (f in food) {
    console.log(f),
    console.log(food[f]),
    console.log(food)
  }
}

foodFunction()

let movies = ['Avengers','John Wick','Alladin','Batman','Interstellar']

movies.push('Forest Gump');
movies.splice(3, 1, 'Superman');
movies.forEach((array)=>{console.log(array)}); 