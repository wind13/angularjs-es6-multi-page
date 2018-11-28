export default {
  name: 'checkmark',
  fn: function () {
    return function (input) {
      return input ? '\u2713' : '\u2718';
    };
  }
}