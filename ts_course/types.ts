//Type Inferences

let aged = true;
let realAge = 0;

if (aged) {
  realAge = 5;
}

let dogAge = realAge * 7;

console.log(`${dogAge} years`);

//----------
// Type shapes

let firstName = 'muriel!';

console.log(firstName.toUpperCase());

console.log(firstName.length);

//---------
// Any

let guess;

guess = 'blue';
guess = 4;

//--------
// Variable type annotations

let phoneNumber: string;

if (Math.random() > 0.5) {
  phoneNumber = '+61770102062';
} else {
  phoneNumber = '7167762323';
}
