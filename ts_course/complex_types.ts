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

//--

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

//---------
// String Enum vs. Numeric Enum

