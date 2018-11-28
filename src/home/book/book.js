import Mdle from '../../common/mdle';
import a0 from '../../provider/factory-a0';
import mathService from '../../provider/service-math-add';
import bookService from '../../provider/service-book';
// import checkmark from '../provider/filter-checkmark';
import bookListCmpt from './book-list-cmpt';
import mathDemoCmpt from '../../components/math-demo-cmpt';
import bookRouteHtml from "./book.html";

const name = 'book';

let mdle = Mdle(name);

mdle.registFactory(a0);

mdle.registService(mathService);
mdle.registComponent(mathDemoCmpt);

mdle.registService(bookService);
mdle.registComponent(bookListCmpt);

// mdle.registFilter(checkmark);

const route = {
  template: bookRouteHtml,
  resolve: {
    // I will cause a 1 second delay
    delay: function ($q, $timeout) {
      'ngInject';
      var delay = $q.defer();
      $timeout(delay.resolve, 1000);
      return delay.promise;
    }
  }
}

export default {
  name,
  mdle,
  route
};