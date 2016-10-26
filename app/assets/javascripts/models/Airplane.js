var app = app || {};

app.Airplane = Backbone.Model.extend({
  urlRoot: '/airplanes',
  defaults: {
    name: '',
    rows: '0',
    colums: 0,
  },

  seat_total: function() {
    return parseInt(this.get('rows')) * this.get('columns');
    // console.log(this.get('rows'));
  }
})
