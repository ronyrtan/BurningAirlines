var app = app || {};

app.AppView = Backbone.View.extend({
  el: '#main',
  render: function(){
    this.$el.html( $('#appView').html() );

    var searchInputView = new app.SearchInputView();
    searchInputView.render();
  }
});
