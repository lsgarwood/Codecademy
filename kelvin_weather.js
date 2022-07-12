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

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${newton} degrees Newton.`);