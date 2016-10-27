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

    setInterval(function(){
      app.reservations.fetch().done(function(){
        app.flightView = new app.FlightView({model: flight});



        var flight = {};
        _(app.reservations.models).each(function(r){
          console.log('Reservations flights',r.get('flight_id'));
          // flight = app.flights.findWhere({'id': r.get('flight_id')});
        });
        // app.flightView = new app.FlightView({model: flight});
        // app.flightView.render();

      });
    }, 2000)
  // });
});
