'use strict';

var Page = require('watch_framework').Page;

var appServices = Page.extend({

  id: 'shelterServicesList',
  items: [
    'Doctor',
    'Pharmacist'
  ],

  template: require('../../templates/pages/shelterServicesList.hbs'),

  buttonEvents: {
    // right: 'goToContacts',
    // top: 'scrollUp',
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
