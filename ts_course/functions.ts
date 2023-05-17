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

// --------------
// Pixel Smile exercise

// index.ts
// create the image data
const imageWidth = 20;
const imageHeight = 8;
const imageData = createImageData();

// draw head
drawRectangle(0, 0, 20, 8);
// eyes
drawDot(7, 2);
drawDot(12, 2);
// smile
drawDot(4, 4);
drawHorizontalLine(4, 5, 12);
drawDot(15, 4);

// output what we drew to the console
outputImage();

function drawVerticalLine(x: number, y: number, length: number) {
  for (let i = 0; (i = length); i++) {
    drawDot(x, y + i);
  }
}

function drawHorizontalLine(x: number, y: number, length: number) {
  for (let i = 0; (i = length); i++) {
    drawDot(x + i, y);
  }
}

function drawDot(x: number, y: number) {
  if (isPointInImage(x, y)) {
    imageData[y * imageWidth + x] = true;
  }
}

function drawRectangle(x: number, y: number, width: number, height: number) {
  // top
  drawHorizontalLine(x, y, width);
  // bottom
  drawHorizontalLine(x, y + height - 1, width);
  // left
  drawVerticalLine(x, y, height);
  // right
  drawVerticalLine(x + width - 1, y, height);
}

/**
 * Gets if the provided point is in the image.
 * @param x - The horizontal position within
 * the image.
 * @param y - The vertical position within
 * the image.
 */
function isPointInImage(x: number, y: number) {
  return x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
}

/**
 * Outputs the image data state to the console.
 * @param onChar - Character to render an
 * "on" pixel with.
 * @param offChar - Character to render an
 * "off" pixel with.
 */
function outputImage(onChar = "X", offChar = " ") {
  let text = "";

  for (let i = 0; i < imageData.length; i++) {
    if (i > 0 && i % imageWidth === 0) {
      text += "\n"; // new line
    }

    text += imageData[i] ? onChar : offChar;
  }

  console.log(text);
}

/**
 * Creates an array of booleans where a pixel
 * is "on" when the value is `true` and "off"
 * when the value is `false`.
 *
 * The pixel values are stored in rows
 * (row-major order) where the index of a
 * pixel in the array can be found via:
 *
 *     index = y * imageWidth + x
 *
 * `x` is the horizontal position in the image
 * and `y` is the vertical position from the top
 * left corner.
 *
 * Note: This function has a return type annotation
 * of `boolean[]`. That means it's an array of
 * booleans. We'll learn more about this in a
 * future module.
 */
function createImageData(): boolean[] {
  // create array of size `length` containing `false` values
  const length = imageWidth * imageHeight;
  return new Array(length).fill(false);
}
