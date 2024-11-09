// challenge 1
console.log("Challenge 1")
class car{
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  }

  accelerate(){
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
  brake(){
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }
}
//car 1
let bmw = new car('bmw', 20);
bmw.accelerate();
bmw.brake();
// car 2
let audi = new car('audi', 80);
audi.accelerate();
audi.brake();
audi.brake();

// challenge 2

console.log("\nChallenge 2");
class carCl{
  constructor(make, speed){
    this.make = make;
    this.speed = speed;
  }

  accelerate(){
    this.speed += 10;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  brake(){
    this.speed -= 5;
    console.log(`${this.make} going at ${this.speed} km/h`);
  }

  get speedUS(){
    return this.speed/1.6;
  }

  set speedUS(speed){
    this.speed = speed*1.6;
  }
}
const ford = new carCl('Ford', 120);
ford.accelerate();
ford.brake();
console.log(`Current speed in mi/h: ${ford.speedUS}`);
ford.speedUS = 75;
console.log(`After setting speed in mi/h, new speed in km/h: ${ford.speed}`);

// challenge 3

console.log("\nChallenge 3");
class EV extends car{
  constructor(make, speed, charge){
    super(make, speed);
    this.charge = charge;
  }
  chargeBattery(chargeTo){
    this.charge = chargeTo;
  }
  accelerate(){
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`)
  }
}
const tesla = new EV('Tesla', 120, 23);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();
