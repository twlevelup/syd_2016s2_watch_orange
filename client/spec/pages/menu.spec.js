'use strict';

var Menu = require('../../src/js/pages/menu');

describe('Our menu page', function() {
  var testPage;
  var testMenuItems;
  var TestPage;

  testMenuItems = new Backbone.Collection();
  testMenuItems.add([{label: 'first'}, {label: 'second'}, {label: 'third'}]);

  beforeEach(function() {

    // var TestPage = Menu.extend({
    //   collection: testMenuItems
    // });

    testPage = new Menu();
  });

  describe('a new menu', function() {
    it('should have a collection of menuItems');
    it('should select the first item in the collection by default', function() {

      // expect(testPage.selected.get('label')).toEqual('first');
    });
  });
}); //end of our menuPage test
