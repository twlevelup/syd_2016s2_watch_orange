'use strict';

var Page = require('watch_framework').Page;

var appServices = Page.extend({

  id: 'socialServicesList',

  template: require('../../templates/pages/socialServicesList.hbs'),

  buttonEvents: {
    // right: 'goToContacts',
    // top: 'scrollUp',
    // bottom: 'scrollDown'
    left: 'back'
  },

  back: function() {
    $('#watch').css('background-color', '#EC7A23');
    $('.screen').css('color', '#FFFFFF');
    window.App.navigate('appDirectory');
  },

  // goToContacts: function() {
  //   window.App.navigate('contacts');
  // },

  // scrollUp: function() {
  //   $('#watch-face').animate({scrollTop: '-=70px'});
  // },

  // scrollDown: function() {
  //   $('#watch-face').animate({scrollTop: '+=70px'});
  // },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = appServices;
