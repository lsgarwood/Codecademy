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

// -------------
// Restaurant Reccomender

// restaurants.ts
// export default
const restaurants = [
  {
    name: 'Silver Rice Sushi 🍣',
    priceBracket: '2',
    deliveryTimeMinutes: 40,
    openHour: '12',
    closeHour: '23',
    distance: '5',
  },
  {
    name: 'Nikko\'s Rotisserie Chicken 🍗',
    priceBracket: '1',
    deliveryTimeMinutes: 20,
    openHour: '12',
    closeHour: '21',
    distance: '8',
  },
  {
    name: 'Aita Trattoria 🍝',
    priceBracket: '3',
    deliveryTimeMinutes: 60,
    openHour: '18',
    closeHour: '22',
    distance: '1',
  },
  {
    name: 'Lula Bagel 🥯',
    priceBracket: '1',
    deliveryTimeMinutes: 20,
    openHour: '0',
    closeHour: '12',
    distance: '2',
  },
  {
    name: 'Golden Chopstick 🥢',
    priceBracket: '1',
    deliveryTimeMinutes: 20,
    openHour: '15',
    closeHour: '23',
    distance: '12',
  },
];

// index.ts
// import restaurants from './restaurants';

const dollarSigns = '$$';
const deliveryTimeMax = 90;
const maxDistance = '10';
let result: string;

const hour: number = new Date().getHours();

const priceBracket: number = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
  if (Number(restaurant.priceBracket) > priceBracket) {
    return false;
  }

  if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {
    return false;
  }

  if (restaurant.distance > maxDistance) {
    return false;
  }

  if (hour < Number(restaurant.openHour) || hour > Number(restaurant.closeHour)) {
    return false;
  }

  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available right now.';
} else {
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);
