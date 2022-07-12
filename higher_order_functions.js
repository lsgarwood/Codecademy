//Functions as Data

const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

isTwoPlusTwo();

console.log(isTwoPlusTwo.name);

//---------
// Functions As Parameters

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  const checkA = val + 2;
  const checkB = func(val);
  return (checkA === checkB ? func(val) : 'inconsistent results');
}

console.log(checkConsistentOutput(addTwo, 3));
