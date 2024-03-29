let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

console.log(newYearsResolutions);

//---------
// create an array

const hobbies = ['drawing', 'knitting', 'sewing'];

console.log(hobbies);

//--------
// accessing elements

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];

console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

//-------
// update elements

let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados';

console.log(groceryList);

//-------
// arrays with let and const

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];

utensils[3] = 'Spoon';
console.log(utensils);

//---------
// .length property

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);

//--------
// .push() method

const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('vaccuum', 'wash windows');
console.log(chores);

//--------
// .pop() method

const choresNew = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

choresNew.pop();

console.log(choresNew);

//------
// more array methods

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList);

groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.splice(1,4));
console.log(groceryList);
groceryList.splice(6, 8, "baguette");

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

console.log(groceryList.join(" "));

//-------
// arrays and functions

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}

removeElement(concept);
console.log(concept);

//-------
// nested arrays

const numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];

console.log(target);

//--------
// Secret message exercise

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// check length
// then remove last string
// print tring to see and check length again
// console.log(secretMessage.length);
secretMessage.pop();
// console.log(secretMessage);
// console.log(secretMessage.length);


// add two more strings to end of array
secretMessage.push("to");
secretMessage.push("program");
// check array and length
// console.log(secretMessage);
// console.log(secretMessage.length);

// replace "esily" with "right"
secretMessage[7] = "right";
// console.log(secretMessage);

// remove first string in array
secretMessage.shift();
// console.log(secretMessage);

// add "Programming" to start of the array
secretMessage.unshift("Programming");
// console.log(secretMessage);

// remove "get right the first time"
secretMessage.splice(6, 10, "know,");
// console.log(secretMessage);

console.log(secretMessage.join(" "));



