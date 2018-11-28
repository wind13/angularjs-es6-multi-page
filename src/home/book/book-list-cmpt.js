import './book-list.pcss';
import template from './book-list-cmpt.html';

const name = 'bookList';

const bindings = {
  params: '<'
};

const controller = function (bookService) {
  'ngInject';
  bookService.fetch().then(resp => {
    this.books = resp.data;
  }, resp => {
    this.error = resp.status + ': ' + resp.statusText;
  });
}

export default {
  name,
  template,
  bindings,
  controller,
}