'use strict';

var eventsData = require("json!./events.json");

var categoriesData = require("json!./categories.json");

function Storage() {
  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);

  this.categoriesData = new Backbone.Collection();
  this.categoriesData.add(categoriesData.categories);
}

module.exports = new Storage();
//
// 'use strict';
//
// var eventsData = require("json!./categories.json");
//
// function Storage() {
//   this.eventsData = new Backbone.Collection();
//   this.eventsData.add(eventsData.events);
// }
//
// module.exports = new Storage();
