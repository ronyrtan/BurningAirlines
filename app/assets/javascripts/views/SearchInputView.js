var app = app || {};

app.SearchInputView = Backbone.View.extend({
  el: '#searchInput',
  events: {
    'submit': 'createSearch'
    // 'keypress textarea': 'checkForEnter'
  },
  createSearch: function(e){
    e.preventDefault();
    var userSearchOrigin = this.$el.find('#search_origin ').val();
    var userSearchDestination = this.$el.find('#search_destination').val();

    //var flight = new app.Flight({origin: userSearchOrigin}, {destination: userSearchDestination});
    //console.log(userSearchOrigin,userSearchDestination);
    var searchResults = app.flights.where({
        origin: userSearchOrigin,
        destination: userSearchDestination
      });

    // console.log(searchResults.length);

    var matchedFlights = new app.SearchResultView({collection: searchResults});
    matchedFlights.render();

    // searchResults.render()
  },
  // checkForEnter: function(event) {
  //   if (event.which === 13) {
  //     this.createSearch();
  //   }
  // },

  render: function() {
    this.$el.html($('#searchInputView').html() );
    // this.$el.text('INPUT Coming Soon');

  }
});
