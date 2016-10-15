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
      expect(page.$el).toContainHtml('<h1>City Doctors</h1>');
    });

    it('This should display an address in the HTML page', function() {
      page.render();
      expect(page.$el).toContainHtml('<p>53-57 Pitt St, Sydney 2000.</p>');
    });
  });
});
