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

// ordersArrayTS.push(['HAMSTER', 1]); will cause error as cannot now push 'HAMSTER'

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

// Math Operations
function add(a, b){return a+b }
function subtract(a, b){return a-b }
function multiply(a, b){return a*b}
function divide(a, b){return a/b}
function wrongAdd(a, b){return (a+b)+''}

// Add your function type below:
mathTutor(multiply);
//mathTutor(wrongAdd); once type alias is creted below, this casues an error here with wrongAdd, as it now wont allow number and string to be passed in, only number

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name,'!');
  let value25 = operationCallback(2,5);
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25,7), '.');
  console.log('Now fill out this worksheet.');
}

// Call your functions below:
type OperatorFunction = (arg0: number, arg1: number) => number;

//---------------
// Generic types

type Human = {name: string, job: string};
type Dog = {name: string, tailWagSpeed: number};

type Family<T> = {
  parents: [T, T], mate: T, children: T[]
};
//Do not change the code above this line.

//Provide type annotations for the variables below:
let theFamily: Family<number> = {
  parents: [3, 4], mate: 9, children: [5, 30, 121]
};

let someFamily: Family<boolean> = {
  parents: [true, true], mate: false, 
  children: [false, false, true, true]
};

let aFamily: Family<Human> = {
  parents: [
    {name: 'Mom', job: 'software engineer'},
    {name: 'Dad', job: 'coding engineer'}
  ],
  mate: {name: 'Matesky', job: 'engineering coder'},
  children: [{name: 'Babesky', job: 'none'}]
};

let anotherFamily: Family<Dog> = {
  parents: [
    {name: 'Momo', tailWagSpeed: 3},
    {name: 'Dado', tailWagSpeed: 100}
  ],
  mate: {name: 'Cheems', tailWagSpeed: 7},
  children: [
    {name: 'Puppin', tailWagSpeed: 0.001},
    {name: 'Puppenaut', tailWagSpeed: 0.0001},
    {name: 'Puppenator', tailWagSpeed: 0.01}
  ]
};

//

// This is a generic type alias
type Collection<G> = {
  name: string,
  quantity: number,
  content: G[]
};
 
let bookCollection: Collection<string> = {
  name: 'Nursery Books',
  quantity: 3,
  content: ['Goodnight Moon', 'Humpty Dumpty', 'Green Eggs & Ham']
};
 
let primeNumberCollection: Collection<number> = {
  name: 'First 5 Prime Numbers',
  quantity: 5,
  content: [2, 3, 5, 7, 11]
};

//-----------
// Generic function

// This is a generic function type alias
function findMiddleMember<M>(members: M[]): M {
  return members[Math.floor(members.length/2)];
}
 
// Call function for an array of strings
console.log(findMiddleMember<string>(['I', 'am', 'very', 'happy'])); // Prints "very"
 
// Call function for an array of numbers
console.log(findMiddleMember<number>([210, 369, 102]));     // Prints 369

// exercise

function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: {name: string, age: number}[];
let coordinateArray: [number, number][];

// Write your code below:
stringArray = getFilledArray<string>('hi', 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{name: string, age: number}>({name: 'J. Dean', age: 24}, 6);
coordinateArray = getFilledArray<[number, number]>([3, 4], 6);

