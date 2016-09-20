'use strict';

var HomePage = require('../../src/js/pages/homePage'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The Home Page', function() {

  beforeEach(function() {
    page = new HomePage();
  });

  describe('button event handler', function() {

    describe('face', function() {

      it('should take the user to the App Directory', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('appDirectory');
      });
    });

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
