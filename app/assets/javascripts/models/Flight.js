var app = app || {};

app.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  defaults: {
    airplane_id: '',
    origin: '',
    destination: '',
    date: '',
  }
})
