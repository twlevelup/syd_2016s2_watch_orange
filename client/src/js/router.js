'use strict';

var Router = Backbone.Router.extend({

  routes: {
    'healthList/:id': 'showHealthList',
    'eventDetails/:id': 'showEventDetails',
    '*other': 'defaultRoute'
  },

  initialize: function(pages) {
    this.pages = pages;

    // TODO call initialize on the parent router
    // this.prototype.initialize();
    // TODO merge routes with default routes
    // this.routes = _.merge(this.prototype.defaultRoutes);
  },

  defaultRoute: function(urlFragment) {
    var pageName = (!urlFragment) ? 'home' : urlFragment;
    var page = this.pages[pageName] || this.pages['404'];
    window.App.showPage(page);
  },

  showEventDetails: function(id) {
    window.App.showPage(this.pages.eventDetails, {cid: id});
  },

  showHealthList: function(id) {
    window.App.showPage(this.pages.healthList, {cid: id});
  }

});

module.exports = Router;
