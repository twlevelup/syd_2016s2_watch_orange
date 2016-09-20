'use strict';

var Page = require('watch_framework').Page;

var homePage = Page.extend({

  id: 'home',

  template: require('../../templates/pages/home.hbs'),

  buttonEvents: {
    face: 'goToAppDirectory'
  },

  goToAppDirectory: function() {
    window.App.navigate('appDirectory');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = homePage;
