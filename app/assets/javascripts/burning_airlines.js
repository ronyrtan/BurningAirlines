// Replace the default ERB style template tags with Handlebars style
_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var app = app || {};

$(document).ready(function() {
  app.router = new app.AppRouter();
  Backbone.history.start();
});
