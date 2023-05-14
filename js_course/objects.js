/* 
Let’s review what we learned in this Objects lesson:

Objects store collections of key-value pairs.
Each key-value pair is a property—when a property is a function it is known as a method.
An object literal is composed of comma-separated key-value pairs surrounded by curly braces.
You can access, add or edit a property within an object by using dot notation or bracket notation.
We can add methods to our object literals using key-value syntax with anonymous function expressions as values or by using the new ES6 method syntax.
We can navigate complex, nested objects by chaining operators.
Objects are mutable—we can change their properties even when they’re declared with const.
Objects are passed by reference— when we make changes to an object passed into a function, those changes are permanent.
We can iterate through objects using the For...in syntax. 

Let’s review the concepts covered in this Advanced Objects lesson:

The object that a method belongs to is called the calling object.
The this keyword refers to the calling object and can be used to access properties of the calling object.
Methods do not automatically have access to other internal properties of the calling object.
The value of this depends on where the this is being accessed from.
We cannot use arrow functions as methods if we want to access other internal properties.
JavaScript objects do not have built-in privacy, rather there are conventions to follow to notify other developers about the intent of the code.
The usage of an underscore before a property name means that the original developer did not intend for that property to be directly changed.
Setters and getter methods allow for more detailed ways of accessing and assigning properties.
Factory functions allow us to create object instances quickly and repeatedly.
There are different ways to use object destructuring: one way is the property value shorthand and another is destructured assignment.

*/

//creating object literals

let fasterShip = {
  'Fuel Type': 'Turbo Fuel',
  color: 'silver'
}

//----------
// Accessing properties

let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

const crewCount = spaceship.numCrew;

const planetArray = spaceship.flightPath;

//---------
// Bracket notation

let spaceshipOne = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

const isActive = spaceshipOne['Active Mission'];
console.log(spaceshipOne[propName])

//-----------
// Property Assignment

let spaceshipTwo = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceshipTwo.color = 'glorious gold';
spaceshipTwo.numEngines = 5;

delete spaceshipTwo['Secret Mission'];

//----------
// Methods

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat () {
    console.log(retreatMessage)
  },
  takeOff () {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
}

alienShip.retreat();
alienShip.takeOff();

//---------
// Nested Objects

let spaceshipThree = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

const capFave = spaceshipThree.crew.captain['favorite foods'][0];
spaceshipThree.passengers = [{name: 'passenger one'}]

const firstPassenger = spaceshipThree.passengers[0];

//-----------
// Pass By Reference

let spaceshipFour = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil'
}

let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceshipFour);
remotelyDisable(spaceshipFour);

console.log(spaceshipFour);

//-----------
// Looping through objects

let spaceshipFive = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

for (let crewMember in spaceshipFive.crew) {
  console.log(`${crewMember}: ${spaceshipFive.crew[crewMember].name}`)
}

for (let crewMember in spaceshipFive.crew) {
  console.log(`${spaceshipFive.crew[crewMember].name} : ${spaceshipFive.crew[crewMember].degree}`)
}

// ----------------
// Meal Maker Exercise

let menu = {
  _meal: "",
  _price: 0,

  set meal(mealToCheck) {
  if (typeof mealToCheck === "string") {
    return this._meal = mealToCheck;
  }
  },

  set price(priceToCheck) {
  if (typeof priceToCheck === "number") {
    return this._price = priceToCheck;
    }
  }, 

  get todaysSpecial() {
    if (this._meal && this._price) {
      return `Today’s Special is ${this._meal} for £${this._price}!`;
    } else {
      return "Meal or price was not set correctly!";
    }
  }

};

// menu._meal = "steak";
// menu._price = 20;
// console.log(menu);

menu.meal = "steak";
menu.price = 20;
console.log(menu);

console.log(menu.todaysSpecial);