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
  });

  describe('rendering', function() {
    it('This should display a list of health services', function() {
      page.render();
      expect(page.$el).toContainHtml('<li>We Cure Diseases</li>');
    });
  });
});
