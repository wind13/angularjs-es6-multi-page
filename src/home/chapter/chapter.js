import { generateTemplate } from "../../common/util";
import Mdle from '../../common/mdle';
import chapterCmpt from './chapter-cmpt';
import chapterView from './chapter-view';

const name = 'chapter';
let mdle = Mdle(name);

mdle.registComponent(chapterCmpt);
mdle.registComponent(chapterView);

const route = {
  template: generateTemplate(chapterView.name)
}

export default {
  name,
  mdle,
  route
};