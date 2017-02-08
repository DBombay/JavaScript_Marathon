let rocket = {
  class: "Hydrogen-Cell Liquid Fuel Rocket",
  fuel: 0,
  addFuel(amount){
    this.fuel += amount
    console.log(`${this.fuel} has been added to the rocket`)
  },

  fire(){
    if (this.fuel != 0) {
      this.fuel -= 1;
      console.log(`Current fuel level: ${this.fuel}`)
      return true;
    } else {
      console.log(`sorry, out of fuel.`)
      return false;
    }
  },
}


module.exports = rocket
