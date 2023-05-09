// Function declarations

function getReminder() {
  console.log('Water the plants');
}

function greetInSpanish() {
  console.log('Buenas Tardes.');
}

//---------
// calling a function

function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}

sayThanks();
sayThanks();
sayThanks();

//--------
// parameters and arguments

function sayThanks(name) {
  console.log('Thank you for your purchase '+ name + '! We appreciate your business.');
}

sayThanks('Cole');

//-------
// default parameters

function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

//-------
// Return

function monitorCount(rows, columns) {
  return rows * columns;
}

const numOfMonitors = monitorCount(5,4);

console.log(numOfMonitors);

//------
// helper functions

function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5,4);

console.log(totalCost);

//--------
// function expressions

const plantNeedsWater = function(day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}

console.log(plantNeedsWater('Tuesday'));

//-------
// arrow functions

const plantNeedsWaterNow = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//------
// concise body arrow functions

const plantNeedsWaterToday = day => day === 'Wednesday' ? true : false;

//--------
// Rock Paper Scissors

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Please enter: rock, paper or scissors");
  }
};

const getComputerChoice = () => {
  randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return "rock";
  } else if (randomNumber === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This game is a tie!";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won!";
    } else {
      return "You won!";
    }
  }
};

const playGame = () => {
  const userChoice = getUserChoice("rock");
  console.log('You played: ' + userChoice);

  const computerChoice = getComputerChoice();
  console.log('The computer played: ' + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

// --------------
// Sleep Debt Calculator

const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 6;
  } else if (day === "thursday") {
    return 5;
  } else if (day === "friday") {
    return 4;
  } else if (day === "saturday") {
    return 3;
  } else if (day === "sunday") {
    return 2;
  } else {
    return "Error: Please enter a valid day of the week!";
  }
};

//console.log(getSleepHours('tuesday'));
//console.log(getSleepHours('wednesday'));
//console.log(getSleepHours('pigeon'));

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("Great, You got the perfect amount of sleep this week!");
  } else if (actualSleepHours > idealSleepHours) {
    tooMuchSleep = actualSleepHours - idealSleepHours;
    console.log("You got " + tooMuchSleep + " more hours sleep than needed this week!");
  } else {
    notEnoughSleep = idealSleepHours - actualSleepHours;
    console.log("Get some rest, You need " + notEnoughSleep +" more hours sleep this week!");
  }
};

calculateSleepDebt();
