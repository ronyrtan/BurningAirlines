var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click .seat': 'chosenSeat'
  },
  chosenSeat: function(e) {
    // var data_x = $('.seat').attr('data-x');
    // var data_x = e

    console.log($(e.currentTarget).data("y"), $(e.currentTarget).data("x"));
    // var x = this.$('.seat').text('x');
    // var y = $('.seat').text();
    // console.log(x);
  },
  render: function () {
    var flightTemplate = $('#flightView').html();
    var flightMaker = _.template(flightTemplate);
    this.$el.html( flightMaker(this.model.toJSON()) );

    var plane = app.airplanes.findWhere({id: this.model.get('airplane_id')});
    var rows = parseInt(plane.get('rows'));
    var columns = plane.get('columns');

    var alpha = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('')

    for (var i = 1; i <= columns; i++) {
      for (var j = 0; j < rows; j++) {
        var $seat = $('<div>', {class: 'seat'});
        $seat.css('width', (100/rows)-5+'%');
        $seat.attr('data-x', (i).toString());
        $seat.attr('data-y', alpha[j]);
        $('.seatingMap').append($seat);
      }
    }
  }
});
