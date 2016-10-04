'use strict';

var eventsData = require("json!./events.json");

function Storage() {
  this.eventsData = new Backbone.Collection();
  this.eventsData.add(eventsData.events);
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
