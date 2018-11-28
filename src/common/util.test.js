import { generateTemplate } from "./util";

describe('Util test', function () {

  beforeEach(() => {
  });

  // beforeEach(inject((mathService) => {
  // _mathservice = mathService;
  // }));

  test('Deep merge right empty object', function () {
    var actual = generateTemplate('chapterView', []);
    expect(actual).toMatchSnapshot();
  });

});