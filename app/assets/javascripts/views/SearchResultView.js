var app = app || {};

app.SearchResultView = Backbone.View.extend({
  tagName: 'table',
  render: function() {
    // <th>Airplane</th>
    // <th>Flight Number</th>
    // <th>Origin</th>
    // <th>Destination</th>
    // <th>Date</th>
    // <th>Seats</th>
    if(this.collection !== undefined) {
      console.log(this.collection.length);
      _(this.collection).each(function(result){
        var $tr = $('<tr>');

        // TODO Clean up Code
        // console.log(result.attributes['origin']);
        // for(var key in result) {
        //   // console.log(result[key]);
        //   var $td = $('<td>');
        //   $td.text(result.attributes[key]);
        //   $td.appendTo($tr);
        // }
        var plane = app.airplanes.findWhere({id: result.get('airplane_id')});
        console.log(plane.get('name'));
        console.log(plane.seat_total());

        var $td_origin = $('<td>');
        $td_origin.text(result.get('origin'));

        var $td_destination = $('<td>');
        $td_destination.text(result.get('destination'));

        var $td_date = $('<td>');
        $td_date.text(result.get('date'));

        var $td_flight_number = $('<td>');
        $td_flight_number.text(result.get('flight_number'));

        var $td_seats = $('<td>');
        $td_seats.text(plane.seat_total());

        var $td_airplane_id = $('<td>');
        $td_airplane_id.text(plane.get('name'));


        $td_origin.appendTo($tr);
        $td_destination.appendTo($tr);
        $td_date.appendTo($tr);
        $td_flight_number.appendTo($tr);
        $td_seats.appendTo($tr);
        $td_airplane_id.appendTo($tr);

        console.log($tr);
        $('#searchResults').append($tr);
      });
    }
    // var origin = this.model.where({origin: this.model.origin});
    // console.log(this.model);
    // var destination = this.model.findWhere('destination');

    // this.$el.text(origin, destination);

  }
})
