'use strict';

var Page = require('watch_framework').Page;
var categories = require ('../../storage');
var ourData = require('../../storage').categoriesData;

var appServices = Page.extend({

  id: 'healthServicesList',

  // services: ['Dentist',
  //           'Doctor',
  //           'Counsellor',
  //           'Hospital',
  //           'Pharmacist'],

  data: require('../../storage').categoriesData,

  template: require('../../templates/pages/healthServicesList.hbs'),

  buttonEvents: {
    // top: 'scrollUp',
    // bottom: 'scrollDown',
    left: 'back',
    right: 'goToHealthList',
    face: 'select'
  },

  back: function() {
    $('#watch').css('background-color', '#EC7A23');
    $('.screen').css('color', '#FFFFFF');
    window.App.navigate('appDirectory');
  },

  /**
  Using this function should find the selected item, and navigate towards the page for that information.

  Would be great if it could use the info associated with the json object.
  */
  goToHealthList: function() {
    window.App.navigate('healthList');
  },

  select: function() {
    window.App.navigate('healthList');
  },

  render: function() {

    // var models = ourData['models'];
    // console.log('This is ourData:', ourData);
    // console.log('These are our models:', ourData.models);
    //
    // console.log('This is model 0:', ourData.models[0]['attributes']);
    // console.log('This is model attribute:', ourData['models'][0]['attributes']['category_name']);

    this.$el.html(this.template(ourData));
    return this;
  }

  // getServiceTypeData: function() {
  //   return this.data.get(this.options.cid);
  // },
  //
  // render: function() {
  //   // TODO if showPage was creataing a new instance of this view the model could be passed in
  //   var details = this.getServiceTypeData().toJSON();
  //   this.$el.html(this.template(details));
  //   return this;
  // }

  // scrollUp: function() {
  //   $('#watch-face').animate({scrollTop: '-=70px'});
  // },

});

module.exports = appServices;
