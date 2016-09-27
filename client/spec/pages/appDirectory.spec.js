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
  });

  describe('rendering', function() {

  });

  it('returns the view object', function() {
    expect(page.render()).toEqual(page);
  });
});
