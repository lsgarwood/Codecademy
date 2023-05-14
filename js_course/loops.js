//Repeating tasks manually

const vacationSpots = ['Norwich', 'Anglesey', 'Lake District'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//--------
// The For Loop

for (let counter = 5; counter >= 5 && counter <= 10; counter ++) {
  console.log(counter);
}

//----------
// The loop below loops from 0 to 3. Edit it to loop backwards from 3 to 0

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

//-------
// Looping thropugh arrays

const vacationSpotsNew = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpotsNew.length; i++) {
  console.log(`I would love to visit ${vacationSpotsNew[i]}`)
}

//--------
// Nested Loops

const bobsFollowers = ['steve', 'wendy','paul', 'sarah'];

const tinasFollowers = ['billy', 'wendy', 'paul'];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      console.log(mutualFollowers.push(tinasFollowers[j]));
    }
  }
}

//-------
// The while loop

const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//------
// Do while

let cupsOfSugarNeeded = 5;

let cupsAdded = 0;

do {
  cupsAdded++
  console.log(cupsAdded + 'cup was added')
} while (cupsAdded < cupsOfSugarNeeded);

//-------
// break key word

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === "Notorious B.I.G.") {
    console.log(rapperArray[i]);
    break;
  }
  console.log(rapperArray[i]);
}

console.log("And if you don't know, now you know.");

// ---------------------
// Whale Speak exercise

const input = "turpentine and turtles";

const vowels = ["a", "e", "i", "o", "u"];

const resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log("i is "+ i);
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }

  if (input[i] === "u") {
    resultArray.push(input[i]);
  }

  for (let x = 0; x < vowels.length; x++) {
    // console.log("x is "+ x);
    if (input[i] === vowels[x]) {
      // console.log(input[i]);
      resultArray.push(input[i]);
    }
  }
}

// console.log(resultArray);

const resultString = resultArray.join("").toUpperCase();

console.log("Input: " + input)
console.log("In Whale: " + resultString);