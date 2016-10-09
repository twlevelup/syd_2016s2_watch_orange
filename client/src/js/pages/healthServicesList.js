'use strict';

var Page = require('watch_framework').Page;

var appServices = Page.extend({

  id: 'healthServicesList',
  services: ['Dentist',
            'Doctor',
            'Counsellor',
            'Hospital',
            'Pharmacist'],

  template: require('../../templates/pages/healthServicesList.hbs'),

  buttonEvents: {
    //assumes you have selected dr, and are moving to the right
    right: 'goToHealthList',
    // top: 'scrollUp',
    // bottom: 'scrollDown'
    left: 'back'
  },

  back: function() {
    window.App.navigate('appDirectory');
  },

  /**
  Using this function should find the selected item, and navigate towards the page for that information.

  Would be great if it could use the info associated with the json object.
  */
  goToHealthList: function() {
    window.App.navigate('healthList');
  },


  // insertServiceList: function() {
  //   for (service in services) {
  //
  //   }
  // }

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
    // insert the list into this template, then use it?
    this.$el.html(this.template());
    return this;
  }

});

module.exports = appServices;
