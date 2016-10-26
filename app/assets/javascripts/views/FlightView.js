var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  render: function () {
    // Review the _.template docs to see what the hell is going on.
    var flightTemplate = $('#flightView').html();
    var flightMaker = _.template(flightTemplate);
    this.$el.html( flightMaker(this.model.toJSON()) );
    console.log(this.model.toJSON());
  }
});
