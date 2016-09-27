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
  });

  describe('rendering', function() {
    it('This should display the address HTML page', function() {
      page.render();
      expect(page.$el).toContainHtml('<h1>Address</h1>');
    });
  });
});
