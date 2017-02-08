// YOUR CODE GOES HERE
Spaceship = require('./Spaceship.js');
CrewMember = require('./CrewMember.js');
let rocket = require('./Rocket.js');

launchpad = (ship, crew, rocket) => {
  console.log("Preflight procedures initiating!");
  console.log(`${ship.name} is loaded on the launchpad`);
  ship.loadCrew(crew);
  console.log(`${ship.captain().name} is the captain!`);
  ship.mountPropulsion(rocket);
  ship.propulsion.addFuel(6);
  ship.takeOff();
};

trainCrew = (arrayOfStrings) => {
  let crewArray = [];
  arrayOfStrings.forEach((person) => {
    crewPerson = new CrewMember(person);
    crewPerson.trained = true;
    crewArray.push(crewPerson);
  });
  return crewArray;
}

let ourShip = new Spaceship("S.S. Ship");
let crewNames = ["Captain Sebastian","Nick the Destroyer", "Tim", "Bri", "Devin", "The AMazing Sam?"]
let crew = trainCrew(crewNames)

launchpad(ourShip,crew,rocket);
