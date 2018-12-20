import Mdle from '../common/mdle';
import userPage from './user-page';
import userService from '../provider/service-user';

const name = 'user';
let mdle = Mdle(name, []);
mdle.registService(userService);
// mdle.registComponent(userPage);

const page = userPage;

export default {
  name,
  mdle,
  page
};
