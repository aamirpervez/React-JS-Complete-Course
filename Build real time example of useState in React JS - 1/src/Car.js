export default class Car {
  constructor(companyName, speed) {
    this.company = companyName;
    this.speed = speed;
  }

  getspeed() {
    console.log(this.company + " car's speed is " + this.speed + "km/hr");
  }
}

export const HelloWorld = () => {};
