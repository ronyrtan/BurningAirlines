// Replace the default ERB style template tags with Handlebars style
_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var app = app || {};

app.flights = new app.Flights();

$(document).ready(function() {
  app.router = new app.AppRouter();
  // app.flights.fetch().done(function () {
    Backbone.history.start();
  // });
});
