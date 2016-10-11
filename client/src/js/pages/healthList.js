'use strict';

var Page = require('watch_framework').Page;

var healthList = Page.extend({

  id: 'healthList',

  template: require('../../templates/pages/healthList.hbs'),

  buttonEvents: {
    left: 'goBackToHealthServices',
    right: 'goBackToAppDirectory',
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

  goBackToAppDirectory: function() {
    window.App.navigate('appDirectory');
  },

  // scrollUp: function() {
  //   $('#watch-face').animate({scrollTop: '-=70px'});
  // },

  scrollUp: function() {
    $('#higlight').addClass('#hidden');
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=70px'});
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = healthList;
