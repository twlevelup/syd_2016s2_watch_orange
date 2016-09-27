'use strict';

var Page = require('watch_framework').Page;

var healthList = Page.extend({

  id: 'healthList',

  template: require('../../templates/pages/healthList.hbs'),

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

module.exports = healthList;
