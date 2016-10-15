'use strict';

var ErrorPage = require('../../src/js/pages/404Page'),
  page;

// window.App = App;

describe('The Home Page', function() {

  beforeEach(function() {
    page = new ErrorPage();
  });

  describe('rendering', function() {

    // it('should produce the correct HTML', function() {
    //   page.render();
    //   expect(page.$el).toContainText('Hello, World!');
    // });

    it('returns the view object', function() {
      expect(page.render()).toEqual(page);
    });

  });

});
