'use strict';

var Page = require('watch_framework').Page;
var categories = require ('../../storage');
var ourData = require('../../storage').categoriesData;

var appServices = Page.extend({

  id: 'healthServicesList',

  data: require('../../storage').categoriesData,

  template: require('../../templates/pages/healthServicesList.hbs'),

  buttonEvents: {
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'back',
    right: 'goToHealthList',
    face: 'select'
  },

  back: function() {
    $('#watch').css('background-color', '#EC7A23');
    $('.screen').css('color', '#FFFFFF');
    window.App.navigate('appDirectory');
  },

  goToHealthList: function() {
    window.App.navigate('healthList');
  },

  select: function() {
    window.App.navigate('healthList');
  },

  render: function() {
    var healthOptions = ourData.models[0].attributes.options;
    this.$el.html(this.template({healthOptions: healthOptions}));
    return this;
  },

  scrollUp: function() {
    $('#watch-face').animate({scrollTop: '-=35px'});
  },

  scrollDown: function() {
    $('#watch-face').animate({scrollTop: '+=35px'});
  }

});

module.exports = appServices;
