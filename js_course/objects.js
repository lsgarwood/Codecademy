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
