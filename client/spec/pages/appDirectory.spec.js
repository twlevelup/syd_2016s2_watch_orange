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

    describe('right', function() {

      it('should take the user to the Shelter Services List', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('right');
        expect(window.App.navigate).toHaveBeenCalledWith('shelterServicesList');
      });
    });

    describe('left', function() {

      it('should take the user to the Food Services List', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('left');
        expect(window.App.navigate).toHaveBeenCalledWith('foodServicesList');
      });
    });

    describe('top', function() {

      it('should take the user to the Health Services', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('top');
        expect(window.App.navigate).toHaveBeenCalledWith('healthServicesList');
      });
    });

    describe('bottom', function() {

      it('should take the user to the Social Services', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('socialServicesList');
      });

      it('should change to the Social Services page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(window.App.navigate).toHaveBeenCalledWith('socialServicesList');
      });
    });

    describe('face', function() {

      it('should take the user to Home Page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('home');
      });

      it('should take the user back to Home Page', function() {
        spyOn(window.App, 'navigate');
        page.configureButtons();
        eventHub.trigger('face');
        expect(window.App.navigate).toHaveBeenCalledWith('home');
      });
    });

  });

  describe('rendering', function() {

  });

  it('returns the view object', function() {
    expect(page.render()).toEqual(page);
  });
});
