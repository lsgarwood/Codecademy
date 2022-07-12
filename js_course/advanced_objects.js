const robot = {
  model: 'B-4MI',
  mobile: true,
  greeting() {
  	console.log(`I'm model ${this.model}, how may I be of service?`);
  }
}

const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greeting() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
  _name: 'Electrons-R-Us',
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === 'number') {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`)
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  }
}

//--------
// The This Keyword

const robotOne = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robotOne.provideInfo());

//----------
// Arrow functions and this

const robotTwo = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robotTwo.checkEnergy();

//---------
// privacy

const robotThree = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robotThree._energyLevel = 'high';

robotThree.recharge();

//----------
// Getters

const robotFour = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number') {
      return `My current energy level is ${this._energyLevel}`
    } else {
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};

console.log(robotFour.energyLevel);

//-----------
//Setters

const robotFive = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if(typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

robotFive.numOfSensors = 100;
console.log(robotFive.numOfSensors);

//----------
// Factory Functions

const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop')
    }
  }
};

const tinCan = robotFactory('P-500', true);

tinCan.beep();

//---------
// Property Value Shorthand

const robotFactoryOne = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop')
    }
  }
};

// To check that the property value shorthand technique worked:
const newRobot = robotFactoryOne('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

//--------
// Destructured Assignment

const robotSix = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robotSix;

functionality.beep();
functionality.fireLaser();

//----------
// Built-In Object Methods

const robotSeven = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robotSeven);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robotSeven);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobotOne =  Object.assign({laserBlaster: true, voiceRecognition: true})

console.log(newRobotOne);