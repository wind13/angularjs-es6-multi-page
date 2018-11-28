export default {
  name: 'bookService',
  fn: ['$http', function ($http) {
    this.fetch = () => $http.get('/someapi/books');
  }],
  mockFn: ['$http', function ($http) {
    this.fetch = () => $http.get('/stub/books.json');
  }]
}