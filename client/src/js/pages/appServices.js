'use strict';

var Page = require('watch_framework').Page;

var appServices = Page.extend({

  id: 'appServices',
  items: [
    'Doctor',
    'Pharmacist'
  ],

  template: require('../../templates/pages/appServices.hbs'),

  buttonEvents: {
    // right: 'goToContacts',
    // top: 'scrollUp',
    // bottom: 'scrollDown'
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
