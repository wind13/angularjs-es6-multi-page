import template from './math-demo-cmpt.html';

const name = 'mathDemo';

const bindings = {
  x: '<',
  y: '<',
  z: '<',
};

const controller = function (mathService) {
  'ngInject';
  this.$onInit = function () {
    this.number = mathService.addTwoNumbers(this.x, this.y, this.z);
  };
}

export default {
  name,
  template,
  bindings,
  controller,
}