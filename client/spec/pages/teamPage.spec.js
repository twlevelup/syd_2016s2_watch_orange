'use strict';

var TeamPage = require('../../src/js/pages/teamPage'),
    page;

describe('Check-in dance', function() {

  beforeEach(function() {
    page = new TeamPage();
    page.render();
  });

  describe('initial git commit', function() {

    it('should include the text "Made by:"', function() {
      expect(page.$el).toContainText('Made by:');
    });

    // TODO: Add a test to check for your name

    it('should contain the name, "Chris"', function() {
      expect(page.$el).toContainText('Chris');
    });

    it('should include the text "Mark Nerwich"', function() {
      expect(page.$el).toContainText('Mark Nerwich');
    });

    it('should include the text "Sheena Takkenberg"', function() {
      expect(page.$el).toContainText('Sheena Takkenberg');
    });

    it('should include the text "Andrew Knight"', function() {
      expect(page.$el).toContainText('Andrew Knight');
    });

    it('should include the text "Pauline Kelly"', function() {
      expect(page.$el).toContainText('Pauline Kelly');
    });

  });
});
