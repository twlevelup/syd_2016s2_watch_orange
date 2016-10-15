'use strict';

var Page = require('watch_framework').Page;

var address = Page.extend({

  id: 'address',

  template: require('../../templates/pages/address.hbs'),

  buttonEvents: {
    right: 'goToAppDirectory',
    left: 'goToHealthList'

    // top: 'scrollUp',
    // bottom: 'scrollDown'
  },

  goToAppDirectory: function() {
    window.App.navigate('appDirectory');
  },

  goToHealthList: function() {
    window.App.navigate('healthList');
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

module.exports = address;
