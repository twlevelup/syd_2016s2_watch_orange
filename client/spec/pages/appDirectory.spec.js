'use strict';

var AppDirectory = require('../../src/js/pages/appDirectory'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The App Directory', function() {

  beforeEach(function() {
      page = new AppDirectory();
    });

  describe('button event handlers', function() {

    describe('right', function() {

      it('should take the user to the App Services', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('appServices');
      });
    });

  });

  describe('rendering', function() {

  });

  it('returns the view object', function() {
    expect(page.render()).toEqual(page);
  });
});
