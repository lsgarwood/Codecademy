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

