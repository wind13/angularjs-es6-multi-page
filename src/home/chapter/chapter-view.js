import template from './chapter-view.html';

const name = 'chapterView';

const controller = function ($routeParams) {
  'ngInject';
  this.prms = $routeParams;
  this.good = 'Good';
}

export default {
  name,
  template,
  controller
};