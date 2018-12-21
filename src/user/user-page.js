import { log, Ramda } from "../common/util";
import template from './user-page.html';

const name = 'userPage';  // <user-page></user-page>
const bindings = {};
const controller = function(userService, filterFilter) {
  'ngInject'
  let decoration = {symbol: '*'};
  this.userTitle = 'I am user.......';
  this.users = [];
  this.allUsers = [];
  this.nameFilter = 'work';
  userService.fetch().then(resp => {
    // log(resp);
    log(this);
    this.users = resp.data;
    this.allUsers = resp.data;
    log(this.users);
  });
  this.filterUserNameByRamda = function () {
    this.users = Ramda.filter(user => {
      return Ramda.contains(this.nameFilter, user.name);
    }, this.allUsers);
  };
  this.filterUserName = function () {
    this.users = filterFilter(this.allUsers, this.nameFilter);
  };
};

export default {
  name,
  template,
  bindings,
  controller,
}
