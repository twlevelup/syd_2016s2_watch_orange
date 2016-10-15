'use strict';

var Address = require('../../src/js/pages/address'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The Address Directory', function() {

  beforeEach(function() {
      page = new Address();
    });

  describe('button event handlers', function() {
    it('should display the app directory page on right click', function() {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('right');
      expect(window.App.navigate).toHaveBeenCalledWith('appDirectory');
    });

  });

  describe('rendering', function() {
    it('This should display the address HTML page', function() {
      page.render();
      expect(page.$el).toContainHtml('The Health Clinic');
    });

    it('This should display an address in the HTML page', function() {
      page.render();
      expect(page.$el).toContainHtml('114 Elizabeth Street, Surry Hills');
    });
  });
});
