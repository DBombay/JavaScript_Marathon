class Spaceship {
  constructor(name){
    this.name = name
    this.crew = []
    this.propulsion = null
  }

  loadCrew(arrayOfCrewObjects){
    arrayOfCrewObjects.forEach((crewMember) => {
      this.crew.push(crewMember);
      console.log(`${crewMember.name} has boarded ${this.name}!`);
    });
  }

  captain(){
    let num = this.crew.length;
    let randomNumber = Math.floor(Math.random() * num);
    let thisCaptain = this.crew[randomNumber];
    return thisCaptain;
  }

  mountPropulsion(unit) {
    this.propulsion = unit
    console.log(`We've mounted a ${unit.class} for the ship's propulsion!`)

  }

  takeOff(){
    if (this.propulsion.fire() == true ) {
      console.log('vroom');
    }else {
      console.log('Everyone go home.');
    }
  }
}

module.exports = Spaceship
