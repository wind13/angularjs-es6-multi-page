import { Ramda } from "./util";
import { COMMON_LANGS } from './i18n';

describe('I18n test', function () {

  beforeEach(() => {
  });

  // beforeEach(inject((mathService) => {
  // _mathservice = mathService;
  // }));

  test('COMMON_LANGS should exist', function () {
    expect(JSON.stringify(COMMON_LANGS)).toMatchSnapshot();
  })

  test('Deep merge right empty object', function () {
    var actual = Ramda.mergeDeepRight({
      'en-US': { 'abc': 'ABC' },
      'zh-CN': { 'abc': '一二三' }
    }, {
        'en-US': { 'abc': '123' },
        'zh-CN': {},
      });
    expect(actual).toEqual({
      'en-US': { 'abc': '123' },
      'zh-CN': { 'abc': '一二三' },
    });
    expect(actual).toMatchSnapshot();
  });

  test('Deep merge right undefined', function () {
    var actual = Ramda.mergeDeepRight({
      'en-US': { 'abc': 'ABC' },
      'zh-CN': { 'abc': '一二三' }
    }, {
        'zh-CN': undefined,
      });
    expect(actual).toEqual({
      'en-US': { 'abc': 'ABC' },
      'zh-CN': undefined,
    });
  });

  test('Deep merge right null', function () {
    var actual = Ramda.mergeDeepRight({
      'en-US': { 'abc': 'ABC' },
      'zh-CN': { 'abc': '一二三' }
    }, {
        'zh-CN': null,
      });
    expect(actual).toEqual({
      'en-US': { 'abc': 'ABC' },
      'zh-CN': null,
    });
  });

});