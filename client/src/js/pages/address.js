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
    $('#watch').css('background-color', '#EC7A23'); //add a class here
    $('.screen').css('color', '#FFFFFF');
    window.App.navigate('appDirectory');
  },

  goToHealthList: function() {
    window.App.navigate('healthList');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

});

module.exports = address;
