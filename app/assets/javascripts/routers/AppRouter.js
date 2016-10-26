var app = app || {};

app.AppRouter = Backbone.Router.extend({

  initialize: function() {
  },

  routes: {
    '': 'index',
    'flights/:id': 'show'
  },
  index: function() {
    var appView = new app.AppView();
    appView.render();
    console.log('index reached');

    app.flights = new app.Flights();
    app.airplanes = new app.Airplanes()
    app.airplanes.fetch().done();
    app.flights.fetch().done();
  },
  show: function (id) {
    var flight = app.flights.get(id);
    var flightView = new app.FlightView({model: flight});
    flightView.render();
  }

});
