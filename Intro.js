// --------------
// Kelvin Weather
// todays forecast kelvin 293 const value
const kelvin = 0;

// celsius is 273 degrees lower than kelvin
const celsius = kelvin - 273;

// converting celsius to fahrenheit
let fahrenheit = celsius * (9/5) + 32;

// using .floor() to round down the fahrenheit temp
fahrenheit = Math.floor(fahrenheit);

// converting celsius to newton
let newton = celsius * (33/100);

// using .floor() to round down newton 
newton = Math.floor(newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
console.log(`The temperature is ${newton} degrees Newton.`)

//------------
// Dog Years
// myAge variable
const myAge = 35;

// variable for forst twwo years of life
let earlyYears = 2;
earlyYears *= 10.5;

// variable for assigning later years 4 dog years
let laterYears = myAge - 2;
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// adding early and later years together
let myAgeInDogYears = earlyYears + laterYears;

// assigning my name to a variable and making it lower case
let myName = 'Lauren Garwood'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);

//---------------
