import { Ng } from "./util";
import { APP_NAME } from "./global";
import { InitApp } from './app';

describe('App test', function () {

  beforeEach(() => {
    InitApp({ 'en-US': {} }, []);
  });

  // beforeEach(inject((mathService) => {
  // _mathservice = mathService;
  // }));

  test('The app module should exist', function () {
    // console.debug(APP_NAME);
    // console.debug(Ng.module);
    const app = Ng.module(APP_NAME);
    expect(app).toBeDefined();
  });
});