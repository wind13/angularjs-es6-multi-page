'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */
/*eslint no-undef: "error"*/

describe('my app', function() {

  it('should automatically redirect to /home/ when location hash/fragment is empty', function() {
    browser.get('/web/modern/home'); //http://localhost:8000/web/modern/home/#/Book/Moby
    expect(browser.getCurrentUrl()).toMatch("/web/modern/home/");
  });

  describe('home', function() {

    beforeEach(function() {
      browser.get('/web/modern/home/#/Book/Moby');
    });

    it('should render div when user navigates to /Book/Moby', function() {
      expect(element.all(by.css('[ng-view] div')).first().getText()).
        toMatch(/Superman - Atfjow Gwofe/);
    });

  });

});