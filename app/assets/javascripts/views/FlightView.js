var app = app || {};

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click .seat': 'chosenSeat'
  },
  chosenSeat: function(e) {
    // if($('.reservedSeat').text() === currentUserName) {
      $('.reservedSeat').remove();
    // }
    var seats = $('.seat').length;
    var seatCount = 0;
    var x = '';
    var y = '';

    console.log(currentUserName);
    if($(e.currentTarget).text() === currentUserName) {
      $(e.currentTarget).text('avail');
      $(e.currentTarget).removeClass('clickedSeat');

      // console.log($(this.app.users.models));
    } else {

      x = $(e.currentTarget).data("y");
      y = $(e.currentTarget).data("x");
      $(e.currentTarget).text(currentUserName);
      $(e.currentTarget).addClass('clickedSeat');

    }
    _($('.seat')).each(function(s) {
      if (s.innerHTML === 'avail'){
        seatCount++
      }
    });
    $('.selectSeat').show();
    var $p = $('<p>').text(y+x);
    $p.addClass('reservedSeat');
    $p.prependTo('.selectSeat');
    console.log(seatCount);
    console.log(y,x);

  },
  render: function () {
    var flightTemplate = $('#flightView').html();
    var flightMaker = _.template(flightTemplate);
    this.$el.html( flightMaker(this.model.toJSON()) );
    // console.log(this.model.toJSON());

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
