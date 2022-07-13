//Intro
function printOperations(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers!');
  }

  console.log(a + b, a / b);
}

// The function call below should print: 12 1 
printOperations(6, 6);

function exclaim(name, count) {
  for (let i = 0; i < count; i += 1) {
    console.log(`${name}!`);
  }
}

// Exclaim 'Muriel!' six times
exclaim('Muriel', 6);

//-----------
// Parameter types

function triple(value: number) {
  return value * 3;
}

function greetTripled(greeting: string, value: number) {
  console.log(`${greeting}, ${triple(value)}!`);
}

greetTripled('Hiya', 5);

//---------
// Optional Parameters

function proclaim(status?: string) {
  console.log(`I'm ${status || 'not ready...'}`);
}

proclaim();
proclaim('ready?');
proclaim('ready!');

//----------
// default parameters

function proclaimOne(status = 'not ready...', repeat = 1) {
  for (let i = 0; i < repeat; i += 1) {
    console.log(`I'm ${status}`);
  }
}

proclaimOne();
proclaimOne('ready?');
proclaimOne('ready!', 3);

//-----------
// Inferring Return Types

function createGreeting(name: string) {
  return `Hello, ${name}!`; // return infers string
}
 
const myGreeting = createGreeting('Aisle Nevertell'); 

function ouncesToCups(ounces: number) {
  return `${ounces / 16} cups`;
}
 
//const liquidAmount: number = ouncesToCups(3);
// Type 'string' is not assignable to type 'number'.

function getRandomNumber(){
  return Math.random();
}

const myVar = getRandomNumber();

//-------------
// Explicit return types

//function createGreeting(name?: string): string {
  //if (name) {
   // return `Hello, ${name}!`;
  //}
 
  //return undefined;
  //Typescript Error: Type 'undefined' is not assignable to type 'string'.
//};

// import {getUserChoice,f1,f2,f3,f4,f5,f6,f7,f8,f9,f10,f11,f12} from './resources'


// function returnFruit(): string{ <-- added in string type
//   let num = getUserChoice();
//   switch(num){
//     case 1 : return f1();
// 		case 2 : return f2();
// 		case 3 : return f3();
// 		case 4 : return f4();
// 		case 5 : return f5();
// 		case 6 : return f6();
// 		case 7 : return f7();
// 		case 8 : return f8();
// 		case 9 : return f9();
// 		case 10 : return f10();
// 		case 11 : return f11();
// 		case 12 : return f12();
//   }
//   return 'durian.jpg'
// }

// console.log(returnFruit());

//The problematic function is f9()

//---------
// Documenting Functions

/**
* This is a documentation comment
*/

/**
   * Returns the sum of two numbers.
   *
   * @param x - The first input number
   * @param y - The second input number
   * @returns The sum of `x` and `y`
   *
   */
  
function getSum(x: number, y: number): number {
    return x + y;
  }

/**
 * Takes in fruit as strings and logs the the outcome of making the fruit salad
 * @param fruit1 - first input fruit
 * @param fruit2 - second input fruit
 * @returns console log of salad
 */

function makeFruitSalad(fruit1: string, fruit2: string): void {
  let salad = fruit1 + fruit2 + fruit2 + fruit1 + fruit2+ fruit1 + fruit1;
  console.log(salad);
}

