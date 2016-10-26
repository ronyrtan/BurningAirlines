var app = app || {};

app.SearchInputView = Backbone.View.extend({
  el: '#searchInput',
  events: {
    'submit': 'preventDefault'
    // 'click button': 'createSearch'
    // 'keypress textarea': 'checkForEnter'
  },
  // createSearch: function () {
  //   var userSearchOrigin = this.$el.find('.search_origin').val();
  //   var userSearchDestination = this.$el.find('.search_destination').val();
  //   var flight = new app.Flight({origin: userSearchOrigin}, {destination: userSearchDestination});
  //   console.log(userSearchOrigin,userSearchDestination);
  //   // flight.save();
  //   // this.$el.find('textarea').val('').focus();
  //   // TODO: Fix this Section
  // },
  preventDefault: function(e){
    e.preventDefault();
    var userSearchOrigin = this.$el.find('#search_origin ').val();
    var userSearchDestination = this.$el.find('#search_destination').val();
    var flight = new app.Flight({origin: userSearchOrigin}, {destination: userSearchDestination});
    console.log(userSearchOrigin,userSearchDestination);
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
