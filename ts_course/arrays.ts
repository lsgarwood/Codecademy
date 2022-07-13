// intro

let customersArray = ['Custy Stomer', 'C. Oostomar', 'C.U.S. Tomer', 3432434, 'Custo Mer', 'Custopher Ustomer', 3432435, 'Kasti Yastimeur'];

//Write Your Code here:
function checkCustomersArray() {
  for (let i = 0; i < customersArray.length; i++) {
    let el = customersArray[i]
    if (typeof el != 'string' ) {
      console.log(`Type error: ${el} should be a string!`)
    }
  }
}

checkCustomersArray()

function stringPush(val) {
  if(typeof val === 'string') {
    customersArray.push(val);
  }
} 

//-------
// Array type annotations

// Arrays:
let bestNumbers: number[] = [7,77,4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBreakfasts: string[]= ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
let bestBooleans: boolean[] = [true, false];

//----------
// multi dimensional arrays

// Multidimensional Arrays:
let bestMealPlan: string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ];

//---------
// Tuples

let favoriteCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];

favoriteCoordinates = [17, 45, 'N', 142, 30, 'E'];

//------
//Array Type Inference

let tup: [number, number, number] = [1,2,3];
let concatResult = tup.concat([4,5,6]); // concatResult has the value [1,2,3,4,5,6]

let dogTup: [string, string, string, string] = ['dog', 'brown fur', 'curly tail', 'sad eyes'];

let myArr = dogTup.concat('string');

myArr[50] = 'not a dog';

//--------
//Rest parameters

//without types...
function smush(firstString, ...otherStrings){
  let output = firstString;
  for(let i = 0; i < otherStrings.length; i++){
    output = output.concat(otherStrings[i]);
  }
  return output;
}
smush('a','h','h','H','H','H','!','!'); // Returns: 'ahhHHH!!'

//with types
function smushOne(firstString, ...otherStrings: string[]){
  /*rest of function*/
}

function addPower(p: number, ...numsToAdd: number[]): number {
  let answer = 0; 
  for(let i = 0; i < numsToAdd.length; i++){
    answer += numsToAdd[i] ** p;
  }
  return answer;
}

//---------
// Spread Syntax

function performDanceMove(moveName:string, moveReps:number, hasFlair:boolean):void{
  console.log(`I do the ${moveName} ${moveReps} times !`);
  if(hasFlair){
    console.log('I do it with flair!');
  }
}

let danceMoves: [string, number, boolean][] = [
  ['chicken beak', 4, false],
  ['wing flap', 4, false],
  ['tail feather shake', 4, false],
  ['clap', 4, false],
  ['chicken beak', 4, true],
  ['wing flap', 4, true],
  ['tail feather shake', 4, true],
  ['clap', 4, true],
];

danceMoves.forEach( move => performDanceMove(...move));

// example

function modulo(dividend: number, divisor: number): number {
  return dividend % divisor;
}
 
const numbersOne: [number, number] = [6, 4];
 
// Call modulo() with a tuple
// console.log(modulo(numbersOne));
// Error: Expected 2 arguments, but got 1.
// Prints NaN
 
// Call modulo() with spread syntax
console.log(modulo(...numbersOne));
// No error, prints 2