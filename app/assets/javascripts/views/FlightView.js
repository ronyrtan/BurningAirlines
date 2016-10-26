var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click .seat': 'chosenSeat'
  },
  chosenSeat: function(e) {
    var seats = $('.seat').length;
    var seatCount = 0;

    if($(e.currentTarget).text() === 'X') {
      $(e.currentTarget).text('avail');
      console.log($(e.currentTarget).data("y"), $(e.currentTarget).data("x"), 'is free');
      // console.log($(this.app.users.models));
      console.log(seats);
    } else {
      console.log($(e.currentTarget).data("y"), $(e.currentTarget).data("x"), 'is now reserved');
      $(e.currentTarget).text('X');
      // var x = $(e.currentTarget).data("y");
      // var y = $(e.currentTarget).data("x");
      console.log(seats);
    }
    _($('.seat')).each(function(s) {
      if (s.innerHTML === 'avail'){
        seatCount++
      }
    });
    console.log(seatCount);
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
        $seat.text('avail');
        $('.seatingMap').append($seat);
      }
    }
  }
});
