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
