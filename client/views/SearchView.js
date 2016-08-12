// LibraryView.js - Defines a backbone view class for the music library.
var SearchView = Backbone.View.extend({

  tagName: 'form',

  initialize: function() {
    // this.collection.on('all', this.render, this);
    this.render();
  },

  events: {
    'keyup': 'search'
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<input type = "text" size = "80" class="searchbar">');
  },

  search: function (e) {
    if (e.which === 13 || e.keycode === 13) {
      console.log('register enter key');
      e.preventDefault(); 
      return false;
    }
    this.collection['userInput'] = this.$('input').val();
    console.log('keypress', this.collection['userInput']);
    // console.log(this.collection['userInput']);
    this.collection.fetch();
  },
});
