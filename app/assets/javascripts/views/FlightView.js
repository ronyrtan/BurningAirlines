var app = app || {};
var userCount = 0;

app.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click .seat': 'chosenSeat',
    'click .seatButton': 'reserveUserSeat'
  },
  chosenSeat: function(e) {
    console.log(userCount);
    var seats = $('.seat').length;
    var seatCount = 0;
    var x = '';
    var y = '';

    if ($(e.currentTarget).text() !== currentUserName && $(e.currentTarget).text() !== 'avail') {
      userCount--;

      if(userCount < 1){
        userCount = 0;
      }

      return ;
    }

    if ($(e.currentTarget).text() === currentUserName) {
      userCount--;

      $('.reservedSeat').empty();
      if(userCount < 1){
        userCount = 0;
      }

    }
    if (userCount === 1) {return;}

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
        seatCount++;
      } else if (s.innerHTML === currentUserName) {
        userCount++;
      }
    });
    console.log('user count', userCount);

    $('.selectSeat').show();
    var $p = $('.reservedSeat').text(y+x);
    console.log('p',$p);
    console.log(seatCount);
    console.log(y,x);
  },
  render: function () {

    var flightTemplate = $('#flightView').html();
    var flightMaker = _.template(flightTemplate);
    console.log(this.model);
    this.$el.html( flightMaker(this.model.toJSON()) );


    var flight = this.model;

    var plane = app.airplanes.findWhere({id: this.model.get('airplane_id')});
    var rows = parseInt(plane.get('rows'));
    var columns = plane.get('columns');

    var alpha = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ').split('');

    // setInterval(function(){


    app.reservations.fetch().done(function() {

      for (var i = 1; i <= columns; i++) {
        for (var j = 0; j < rows; j++) {
          var $seat = $('<div>', {class: 'seat'});
          $seat.css('width', (100/rows)-5+'%');
          var x = i.toString();
          var y = alpha[j];
          $seat.attr('data-x', x);
          $seat.attr('data-y', y);

          var reservation = app.reservations.findWhere({'seat': x+y});
          console.log('seats x y', x+y);
          console.log('flight_id', flight.get('id'));

          if(reservation === undefined || reservation.get('flight_id') === flight.get('id')) {
            if(reservation === undefined) {
              $seat.text('avail');
              $('.seatingMap').append($seat);
            }
            else {
              var user = app.users.findWhere({'id': reservation.get('user_id')});
              console.log("This is the user", user.get('name'));
              $seat.text(user.get('name'));
              $seat.addClass('clickedSeat');
              $('.seatingMap').append($seat);
              userCount++;
            }

          }
        }
      }
    });
  // },200);
},

  reserveUserSeat: function(e) {
    console.log('this seat has been reserved');
    var $userSeat = $('.reservedSeat').html();
    var userID = currentUserID;
    var flightID = this.model.get('id');
    var totalSeats = this.model.get('seats') - userCount;

    this.model.set('seats', totalSeats);
    console.log(this.model.attributes);
    this.model.save().done();
    app.reservation = new app.Reservation();
    app.reservation.set({
      'user_id': userID,
      'flight_id': flightID,
      'seat': $userSeat
    });
    app.reservation.save().done(function(){
      this.render();
    });

    console.log("flightID", flightID);
    console.log("user ID", userID);
    console.log(totalSeats);


  }
});
