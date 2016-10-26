var app = app || {};

app.SearchInputView = Backbone.View.extend({
  el: '#searchInput',
  events: {
    'submit': 'createSearch',
    'click .search_flight': 'findSearch'
    // 'keypress textarea': 'checkForEnter'
  },
  findSearch: function(e) {
    e.preventDefault();
    $('#searchResults').html('');
    var userSearchOrigin = this.$el.find('#searchOrigin option:selected').first().text();
    console.log(userSearchOrigin);
    var userSearchDestination = this.$el.find('#searchDestination option:selected ').first().text();
    console.log(userSearchDestination);

    var searchResults = app.flights.where({
      origin: userSearchOrigin,
      destination: userSearchDestination
    });

    app.matchedFlights = new app.SearchResultView({collection: searchResults});

    app.matchedFlights.render();

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
