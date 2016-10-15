'use strict';

var AppServices = require('../../src/js/pages/healthServicesList'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

window.App = App;

describe('The Health Services', function() {

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

      // testing to see if the face button to connect up with healthList.
      it ('should take the user to the next page for nearby services', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('healthList');
      });

      // it ('right button should go home', function() {
      //   spyOn(window.App, 'navigate');
      //   page.configureButtons();
      //   eventHub.trigger('right');
      //   expect(window.App.navigate).toHaveBeenCalledWith('appDirectory');
      // });
    });

  });

  describe('rendering', function() {
    it('should produce the correct HTML', function() {
      page.render();
      expect(page.$el).toContainHtml('<h1 class="h1Style">Health Services</h1>');
    });

    it('should produce the correct HTML', function() {
      page.render();
      expect(page.$el).toContainHtml('<li>Doctor</li>');
    });

    it('should produce the correct HTML', function() {
      page.render();
      expect(page.$el).toContainHtml('<li>Dentist</li>');
    });

  });
});
