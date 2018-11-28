import { Ng } from "../../common/util";
import book from './book';

describe('Math service - addTwoNumbers', function(){

  beforeEach(
    Ng.mock.module(book.name)
  );

  var _mathservice;

  beforeEach(inject((mathService) => {
    _mathservice = mathService;
  }));

  test('1 + 1 should equal 2', function(){
    var actual = _mathservice.addTwoNumbers(1,1);
    expect(actual).toEqual(2);
  });

  test('10 + 5 should equal 15', function(){
    var actual = _mathservice.addTwoNumbers(10,5);
    expect(actual).toEqual(15);
  });

  test('50 + 80 should equal 130', function(){
    var actual = _mathservice.addTwoNumbers(50,80);
    expect(actual).toEqual(130);
  });

  test('undefined + 80 should equal NaN', function(){
    var actual = _mathservice.addTwoNumbers(undefined,80);
    expect(actual).toEqual(NaN);
  });

});