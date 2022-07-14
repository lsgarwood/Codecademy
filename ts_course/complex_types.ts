// enums

enum MaritalStatus {
  Single,
  Married,
  Separated,
  Divorced
};
 
let employee: [string, MaritalStatus, number] = [
  'Bob Jones',
  MaritalStatus.Single,
  39
];

//

let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}

let petOnSaleTS: Pet = Pet.Chinchilla;
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
]

// ordersArrayTS.push([Pet.Jerboa, 3]); This will make an error as now type safe the orders array, you cant add a different type in

//----------------
// String Enum vs. Numeric Enum

// This is a numeric enum type
enum ClassGrade {
  Freshman = 9,
  Sophomore,
  Junior,
  Senior
};
 
// This is a string enum type
enum ClassName {
  Freshman = 'FRESHMAN',
  Sophomore = 'SOPHOMORE',
  Junior = 'JUNIOR',
  Senior = 'SENIOR'
}
 
const studentClass: ClassName = ClassName.Junior;
const studentGrade: ClassGrade = ClassGrade.Junior;
 
console.log(`I am a ${studentClass} in ${studentGrade}th grade.`);
// Prints "I am a JUNIOR in 11th grade."

let petOnSaleOne = 'chinchilla';
let ordersArrayOne = [
  ['rat', 2], 
  ['chinchilla', 1], 
  ['hamster', 2], 
  ['chinchilla', 50]
];

enum Pet {
  Hamster1 = 'HAMSTER',
  Rat1 = 'RAT',
  Chinchilla1 = 'CHINCHILLA',
  Tarantula1 = 'TARANTULA'
}

const petOnSaleTSOne: Pet = Pet.Chinchilla1;

let ordersArrayTSOne: [Pet, number][] = [
  [Pet.Rat1, 2],
  [Pet.Chinchilla1, 1],
  [Pet.Hamster1, 2],
  [Pet.Chinchilla1, 50]
]

// ordersArrayTS.push(['HAMSTER', 1]); will case error as cannot now push 'HAMSTER'

//-------------------
// Object Types

// Define an object type for car
let car: {make: string, model: string, year: number};
 
car = {make: 'Toyota', model: 'Camry', year: 2020}; // No error
//car = {make: 'Nissan', mode: 'Sentra', year: 2019};
/*
Error: Type '{make: string; mode: string; year: number;}' is not assignable to
type '{make: string; model: string; year: number;}'.
Object literal may only specify known properties, but 'mode' does not exist in
type '{make: string; model: string; year: number;}'.
Did you mean to write 'model'?
*/
//car = {make: 'Chevrolet', model: 'Monte Carlo', year: '1995'};
// Error: Type 'string' is not assignable to type 'number'.

function sayHappyBirthdayWithObject(personObject: {name: string, age: number, giftWish: string, success: boolean}) {
  let output ='';
  output += 'Happy Birthday '
         + personObject.name + '! ';
  output += 'You are now ' 
         + personObject.age + ' years old! ';
  output += 'Your birthday wish was to receive ' 
         + personObject.giftWish 
         + '. And guess what? You will ';
  if (!personObject.success){
    output += 'not ';
  }
  output += 'receive it! \n';
  console.log(output);
}

let birthdayBabies: {name: string, age: number, giftWish: string, success: boolean}[] = [
  {name: 'Liam', age: 0, giftWish: 'karate skills', success: false}, 
  {name: 'Olivia', age: 0, giftWish: 'a bright future', success:true}, 
  {name: 'Ava', age: 0, giftWish: '$0.25', success:true}
]; 

birthdayBabies.forEach(sayHappyBirthdayWithObject);

//----------------
// Type Alises

// Add your type alias below:
type Coord = [number, number, string, number, number, string];

let codecademyCoordinates: Coord = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: Coord = [25, 0 , 'N' , 71, 0, 'W'];

//--------------
// Function Types

