export default {
  name: 'bookService',
  fn: function ($http) {
    'ngInject'
    this.fetch = () => $http.get('/someapi/books');
  },
  mockFn: function ($http) {
    'ngInject'
    this.fetch = () => $http.get('/stub/books.json');
  }
}
