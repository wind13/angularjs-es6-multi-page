import Mdle from '../common/mdle';
import userPage from './user-page';
import userService from '../provider/service-user';
import filterReverse from "../provider/filter-reverse";

const name = 'user';
let mdle = Mdle(name, []);
mdle.registService(userService);
// mdle.registComponent(userPage);
// mdle.registFilter(filterReverse);

const page = userPage;

export default {
  name,
  mdle,
  page
};
