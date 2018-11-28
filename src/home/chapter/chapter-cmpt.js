import template from './chapter-cmpt.html';

const name = 'chapter';

const controller = function ($routeParams) {
  'ngInject';
  this.params = $routeParams;
}

export default {
  name,
  template,
  controller,
}