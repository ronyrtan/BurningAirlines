var app = app || {};

app.Airplanes = Backbone.Collection.extend({
  url:'/airplanes',
  model: app.Airplane,
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
