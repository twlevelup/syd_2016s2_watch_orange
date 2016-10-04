'use strict';

var HealthCategoriesList = require('../../src/js/pages/healthCategories'),
  App = require('../../src/js/app'),
  eventHub = require('watch_framework').EventHub,
  page;

describe('The Health Categories', function() {

  beforeEach(function() {
    page = new HealthCategoriesList();
  });

  describe('button events', function() {

    describe('top', function() {
      it('should move the selection to the previous nearby service', function() {
        spyOn(page, 'previous');
        page.configureButtons();
        eventHub.trigger('top');
        expect(page.previous).toHaveBeenCalled();
      });
    });

    // This one will need to change from right button to the face for seletion.
    describe('right', function() {
      it('should select the current service and navigate to the more detailed info about service', function() {
        spyOn(page, 'select');
        page.configureButtons();
        eventHub.trigger('right');
        expect(page.select).toHaveBeenCalled();
      });
    });

    describe('bottom', function() {
      it('should move the selection to the next service', function() {
        spyOn(page, 'next');
        page.configureButtons();
        eventHub.trigger('bottom');
        expect(page.next).toHaveBeenCalled();
      });
    });

    describe('left', function() {
      it('should go back to previous basic list of services', function() {
        spyOn(page, 'back');
        page.configureButtons();
        eventHub.trigger('left');
        expect(page.back).toHaveBeenCalled();
      });
    });

  });

  // This isn't working right now - why?
  // describe('select', function() {
  //   it('navigates to the appHome page', function() {
  //     var cid = 'c42';
  //     spyOn(window.App, 'navigate');
  //     page.selected = { cid: cid };
  //     page.select();
  //     expect(window.App.navigate).toHaveBeenCalledWith('appDirectory/' + cid);
  //   });
  // });

});
