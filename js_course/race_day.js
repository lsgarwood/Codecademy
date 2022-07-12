let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

const runnersAge = 18;

if (runnersAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly === true) {
  console.log(`Runner ${raceNumber}, You will race at 9.30am`);
} else if (runnersAge > 18 && registeredEarly === false) {
  console.log(`Runner ${raceNumber}, You registered late, you will race at 11.00am`);
} else if (runnersAge < 18) {
  console.log(`Runner ${raceNumber}, Youth runners will race at 12.30am`);
} else {
  console.log(`Runner ${raceNumber}, You should see the registration desk`);
}