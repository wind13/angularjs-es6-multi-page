import { Ramda } from "../common/util";

export default [{
  name: 'reverse',
  fn: function () {
    return function (input) {
      return Ramda.reverse(input);
    };
  }
}, {
  name: 'checkmark',
  fn: function () {
    return function (input) {
      return input ? '\u2713' : '\u2718';
    };
  }
}];
