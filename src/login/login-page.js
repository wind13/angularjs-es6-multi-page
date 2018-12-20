import template from './login-page.html';

const name = 'loginPage';  // <login-page></login-page>
const bindings = {};
const controller = function() {
  this.loginTitle = 'I am login.......';
};

export default {
  name,
  template,
  bindings,
  controller,
}
