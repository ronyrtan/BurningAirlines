var app = app || {};

app.AppRouter = Backbone.Router.extend({

  initialize: function() {
  },

  routes: {
    '': 'index'
  },
  index: function() {
    var appView = new app.AppView();
    appView.render();
    console.log('index reached');

    app.flights = new app.Flights();
    app.airplanes = new app.Airplanes()
    app.airplanes.fetch().done();
    app.flights.fetch().done( function() {
      app.flights.each(function(flight) {
        var searchResultView = new app.SearchResultView({model: flight});
        searchResultView.render();
      })
    });
  }

});
