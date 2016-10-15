'use strict';

var Address = require('../../src/js/pages/address'),
  storage = require('../../src/storage'),
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

    it('should display the health list on left click', function() {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('left');
      expect(window.App.navigate).toHaveBeenCalledWith('healthList');
    });

  });

  // describe('a address page', function() {
  //   it('should load the address data', function() {
  //     expect(page.data.length).toBeGreaterThan(1);
  //   });
  // });

  describe('rendering', function() {
    it('This should display the address HTML page', function() {
      page.render();
      expect(page.$el).toContainHtml('<h1 class="h1Style">The Health Clinic</h1>');
    });

    it('This should display an address in the HTML page', function() {
      page.render();
      expect(page.$el).toContainHtml('<p class="address">114 Elizabeth Street, Surry Hills</p>');
    });
  });
});
