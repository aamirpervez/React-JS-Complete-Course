import Car, { HelloWorld } from "./Car";

export class Model extends Car {
  constructor(company, speed) {
    super(company, speed);
  }
  show() {
    return this.getspeed();
  }
}
