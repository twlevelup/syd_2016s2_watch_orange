'use strict';

var Page = require('watch_framework').Page;

var appDirectory = Page.extend({

  id: 'appDirectory',

  template: require('../../templates/pages/appDirectory.hbs'),

  buttonEvents: {
    right: 'goToAppServices'
  },

  goToAppServices: function() {
    window.App.navigate('appServices');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = appDirectory;
