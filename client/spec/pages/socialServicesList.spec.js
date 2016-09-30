'use strict';

var AppServices = require('../../src/js/pages/socialServicesList'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The Social Services', function() {

  beforeEach(function() {
      page = new AppServices();
    });

  describe('button event handlers', function() {
    describe('left', function() {
      it('should take the user to the app directory', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('appDirectory');
      });
    });
  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      page.render();
      expect(page.$el).toContainHtml('<h1>Social Services</h1>');
    });

  });
});
