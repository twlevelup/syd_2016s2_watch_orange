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
    right: 'goToHealthList',

    // top: 'scrollUp',
    // bottom: 'scrollDown'

    left: 'back',
    face: 'select'
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
  select: function() {
    window.App.navigate('healthList');
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }

  // goToContacts: function() {
  //   window.App.navigate('contacts');
  // },

  // scrollUp: function() {
  //   $('#watch-face').animate({scrollTop: '-=70px'});
  // },

  // scrollDown: function() {
  //   $('#watch-face').animate({scrollTop: '+=70px'});
  // },
});

module.exports = appServices;
