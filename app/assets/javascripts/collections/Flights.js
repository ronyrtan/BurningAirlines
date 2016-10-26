var app = app || {};

app.Flights = Backbone.Collection.extend({
  url:'/flights',
  model: app.Flight,
  initialize: function() {

    // this.on('all', function() {
    //
    // })

    // this.on('add', function (s) {
    //   // Self rendering secrets
    //
    // })
  }
});
