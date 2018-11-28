import a0 from "./factory-a0";

export default {
  name: 'mathService',
  fn: [a0.name, function (z) {
    this.addTwoNumbers = function (x, y) {
      return x + y + z;
    };
  }]
}