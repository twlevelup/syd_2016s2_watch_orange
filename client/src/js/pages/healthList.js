'use strict';

var Page = require('watch_framework').Page;
var storage = require('../../storage');

var healthList = Page.extend({

  id: 'healthList',

  template: require('../../templates/pages/healthList.hbs'),

  buttonEvents: {
    left: 'goBackToHealthServices',
    right: 'goToAddress',
    face: 'goToAddress',
    up: 'scrollUp',
    down: 'scrollDown'
  },

  goToAddress: function() {
    window.App.navigate('address');
  },

  goBackToHealthServices: function() {
    window.App.navigate('healthServicesList');
  },

  scrollUp: function() {
    $('#scroll').animate({scrollTop: '-=70px'});
  },

  scrollDown: function() {
    $('#scroll').animate({scrollTop: '+=70px'}).addClass('highlight');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  getMenuItemLabel: function(menuItem) {
    return menuItem.get('name');
  },

  //move to the address page, with the following data
  select: function() {
    window.App.navigate('address/' + this.selected.cid);
  },

  collection: storage.categoriesData

});

module.exports = healthList;
