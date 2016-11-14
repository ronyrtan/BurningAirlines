// Replace the default ERB style template tags with Handlebars style
_.templateSettings = {
   interpolate: /\{\{\=(.+?)\}\}/g,
   evaluate: /\{\{(.+?)\}\}/g
};

var app = app || {};

// app.flights = new app.Flights();
// app.reservations = new app.Reservations();

$(document).ready(function() {
    app.reservations = new app.Reservations();
    app.users = new app.Users();
    app.flights = new app.Flights();
    app.airplanes = new app.Airplanes();
    var airplanePromise = app.airplanes.fetch();
    var flightsPromise = app.flights.fetch();
    var usersPromise = app.users.fetch();
    var reservationsPromise = app.reservations.fetch();
    $.when(airplanePromise, flightsPromise, usersPromise, reservationsPromise).then(function () {
      app.router = new app.AppRouter();
      Backbone.history.start();
      setInterval(function(){
        app.reservations.fetch().done(function(){
          _(app.reservations.models).each(function(r){
            console.log('Reservations flights',r.get('flight_id'));
          });
        });
      }, 2000);

    });



});
