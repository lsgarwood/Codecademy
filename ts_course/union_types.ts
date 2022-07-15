// Defining Unions

let answer: any;    // any type
let typedAnswer: string | number; // union type

//

let myBoolean: string | boolean;
 
myBoolean = 'TRUE';  // string type
myBoolean = false;   // boolean type

//

function printNumsAndStrings(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

printNumsAndStrings('hello!');
printNumsAndStrings(77);

//------------
// Type Narrowing

const choices: [string, string] = ['NO', 'YES'];
const processAnswer = (answer: number | boolean) => {
  if (typeof answer === 'number') {
    console.log(choices[answer]);
  } else if (typeof answer === 'boolean') {
    if (answer) {
      console.log(choices[1]);
    } else {
      console.log(choices[0]);
    }
  }
}
processAnswer(true);   // Prints "YES"
processAnswer(0);      // Prints "NO"

//

function formatValue(value: string | number) {
  if(typeof value === 'string') {
    console.log(value.toLowerCase());
  }
  if(typeof value === 'number') {
    console.log(value.toFixed(2));
  }
}

formatValue('Hiya');
formatValue(42);

//------------------
// Inferred Union Return Types

const popStack = (stack: string[]) => {
  if (stack.length) {
    return stack[stack.length-1]; // return type is any
  } else {
    return null;      // return type is null
  }
};
let toys: string[] = ['Doll', 'Ball', 'Marbles'];
let emptyBin: string[] = [];
let item: string | null = popStack(toys); // item has union type
console.log(item);  // Prints "Marbles"
item = popStack(emptyBin);
console.log(item);  // Prints null

//

type User = {
  id: number;
  username: string;
};

function createUser() {
  const randomChance = Math.random() >= 0.5;

  if (randomChance) {
    return { id: 1, username: 'nikko' };
  } else {
    return 'Could not create a user.';
  }
}

const userData: string | User = createUser() 

//-----------------
// Unions and Arrays

function formatListings(listings: (string |number)[]) {
  return listings.map((listing) => {
    if (typeof listing === 'string') {
      return listing.toUpperCase();
    }

    if (typeof listing === 'number') {
      return `$${listing.toLocaleString()}`;
    }
  });
}

const result = formatListings([
  '123 Main St',
  226800,
  '580 Broadway Apt 4a',
  337900,
]);

console.log(result);

//

const removeDashes = (id: string | number) => {
  if (typeof id === 'string') {
    id = id.split('-').join('');
    return parseInt(id);
  } else {
    return id;
  }
} 
// This is a union of array types
let ids: (number | string)[] = ['93-235-66', '89-528-92'];
let newIds: (number | string)[] = [];
for (let i=0; i < ids.length; i++) {
  newIds[i] = removeDashes(ids[i]); // Convert string id to number id
}
console.log(newIds);  // Prints [9323566, 8952892]

//-----------------
// Union Type Common Property Access

let element: string | number[] = 'Codecademy';
// The .length property is common for string and array
console.log(element.length);      // Prints 10
// The .match method only works for a string type
console.log(element.match('my')); // Prints ["my"]
 
element = [3, 5, 1];
// The length property is common for string and array
console.log(element.length);      // Prints 3
// The .match method will not work for an array type
// console.log(element.match(5));  // Error: Property 'match' does not exist on type 'number[]'.

//---------------
// Common key value pairs

type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);

console.log(`You have an update from ${friendName}.`);

//-----------------
// Unions with literal types

// This is a union of string literal types
type RPS = 'rock' | 'paper' | 'scissors' ;
const play = (choice: RPS): void => {
  console.log('You: ', choice);
  let result: string = '';
  switch (choice) {
    case 'rock':
      result = 'paper';
      break;
    case 'paper':
      result = 'scissors';
      break;
    case 'scissors':
      result = 'rock';
      break;
  }
  console.log('Me: ', result);
}
const number = Math.floor(Math.random()*3);
let choicesOne: [RPS, RPS, RPS] = ['rock', 'paper', 'scissors'];
play(choicesOne[number]); 

// exercise
 
type Status = 'idle' | 'downloading' | 'complete';

function downloadStatus(status: Status) {
  if(status === 'idle') {
    console.log('Your download is complete!');
  }
  if(status === 'downloading') {
    console.log('Downloading...');
  }
  if(status === 'complete') {
    console.log('Your download is complete!');
  }
}

downloadStatus('idle');