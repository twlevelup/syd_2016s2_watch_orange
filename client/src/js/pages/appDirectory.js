'use strict';

var Page = require('watch_framework').Page;

var appDirectory = Page.extend({

  id: 'appDirectory',

  template: require('../../templates/pages/appDirectory.hbs'),

  buttonEvents: {
    top: 'goToHealthServicesList',
    left: 'goToFoodServicesList',
    right: 'goToShelterServicesList',
    face: 'goToHomePage'
  },

  goToHealthServicesList: function() {
    window.App.navigate('healthServicesList');
  },

  goToFoodServicesList: function() {
    window.App.navigate('foodServicesList');
  },

  goToShelterServicesList: function() {
    window.App.navigate('shelterServicesList');
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
