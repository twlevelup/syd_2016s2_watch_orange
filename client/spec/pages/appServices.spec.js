'use strict';

var AppServices = require('../../src/js/pages/appServices'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The App Services', function() {

  beforeEach(function() {
      page = new AppServices();
    });

  describe('button event handlers', function() {

  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      page.render();
      expect(page.$el).toContainHtml('<h1>Services</h1>');
    });

    it('should produce the correct HTML', function() {
      page.render();
      expect(page.$el).toContainHtml('<li>Doctor</li>');
    });
  });
});
