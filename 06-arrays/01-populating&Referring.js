/*
Arrays
************
Arrays are containers that hold lists of items
​

  (1)  (2)  (3)
​
1- name of the Array, or list; 
2- The Array is inside of these square brackets
3- each item, regardless of datatype, is separated by commas
*/

let list = [ 'item1',  'item2',  'item3'];
console.log(typeof list);

let groceryList = ['oranges', 'bananas', 'oreos']
console.log(groceryList[2]);

let students = ['Tony','marshall','Rhys', 'Ray',23,true, ['cory','Garrett','brian']];
console.log(students instanceof Array);
let myStudents = students[6];
console.log("Hello",myStudents[2],'you look nice today')

// Populating and Referring
let food = ['Pecan pie', 'shrimp','quesadilla', 'Cheesecake', 'Hotdog']

food.push('Pizza') //add an item to array
food.splice(1, 1, 'bananas'); // replaces items start, how many, what
food.pop()// removes last element
food.shift()// removes first element
food.unshift('Guacamole')// inserts elements at start of array

for (f in food){
    console.log(f)
    console.log(food[f])
}
for (f of food){
    console.log(f)
}