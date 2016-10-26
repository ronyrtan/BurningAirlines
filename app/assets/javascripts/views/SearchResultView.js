var app = app || {};

app.SearchResultView = Backbone.View.extend({
  el: "#searchResults",
  events: {
    'click .flight_number': 'showFlight'
  },

  showFlight: function (e) {
    var id = $(e.currentTarget).data("id");
    console.log(id);
    //
    // _(this.collection).each(function(r){
    //   if(r.attributes.id === id){
    //     console.log(r.attributes);
    //     app.router.navigate('flights/' + r, true);
    //   }
    // });
    app.router.navigate('flights/' + id, true);
  },

  render: function() {

    var template = $('#searchResult').html();
    var resultMaker = _.template(template);

    var $elem = this.$el;   // because 'this' is about to be redefined in our each loop

      console.log(this.collection.length);
      var counter = 1;
      _(app.matchedFlights.collection).each(function(result){

        $elem.append( resultMaker(result.toJSON()) );

      });
      console.log('counter', counter);
    }
})
