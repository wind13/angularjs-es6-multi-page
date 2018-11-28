import Mdle from '../common/mdle';
import homePage from './home-page';
import book from './book/book';
import chapter from './chapter/chapter';

const name = 'home';
let mdle = Mdle(name, [
  book.name,
  chapter.name,
]);

mdle.setRoutes({
  '/Book/:bookId': book.route,
  '/Book/:bookId/ch/:chapterId': chapter.route
});

const page = homePage;

export default {
  name,
  mdle,
  page
};