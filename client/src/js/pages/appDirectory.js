'use strict';

var Page = require('watch_framework').Page;

var appDirectory = Page.extend({

  id: 'appDirectory',

  template: require('../../templates/pages/appDirectory.hbs'),

  buttonEvents: {
    top: 'goToHealthServicesList',
    left: 'goToFoodServicesList',
    right: 'goToShelterServicesList',
    bottom: 'goToSocialServicesList',
    face: 'goToHomePage'
  },

  goToHealthServicesList: function() {
    $('#watch').css('background-color', '#FFFFFF');
    $('.screen').css('color', '#000000');
    window.App.navigate('healthServicesList');
  },

  goToFoodServicesList: function() {
    window.App.navigate('foodServicesList');
  },

  goToShelterServicesList: function() {
    window.App.navigate('shelterServicesList');
  },

  goToSocialServicesList: function() {
    window.App.navigate('socialServicesList');
  },

  goToHomePage: function() {
    window.App.navigate('home');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = appDirectory;
