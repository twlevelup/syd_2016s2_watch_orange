'use strict';

var HealthList = require('../../src/js/pages/healthList'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The Health List', function() {

  beforeEach(function() {
      page = new HealthList();
    });

  describe('button event handlers', function() {
    it('This should take us to the address page', function() {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('face');
      expect(window.App.navigate).toHaveBeenCalledWith('address');
    });

    it('This should take us back to Health Categories', function() {
      spyOn(window.App, 'navigate');
      page.configureButtons();
      eventHub.trigger('left');
      expect(window.App.navigate).toHaveBeenCalledWith('healthCategories');
    });
  });

  describe('rendering', function() {
    it('This should display a list of health services', function() {
      page.render();
      expect(page.$el).toContainHtml('<li>We Cure Diseases</li>');
    });
  });
});
