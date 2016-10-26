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

    var searchResults = app.flights.where({
        origin: userSearchOrigin,
        destination: userSearchDestination
      });

    console.log('sr', searchResults);


    app.matchedFlights = new app.SearchResultView({collection: searchResults});

    // console.log(app.matchedFlights);

    app.matchedFlights.render();

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
