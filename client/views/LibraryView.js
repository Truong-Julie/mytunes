// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('sync', this.render, this);
    this.render();
  },

  events: {

  },
  // template: _.template('<div>Library</div>'),

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();
    this.$el.html('<div class="libraryHeader">Library</div>').append('<table><th>Artist</th><th>Song</th><th>Play Count</th>').append(
      this.collection.map(function(song) {
        return new LibraryEntryView({model: song}).render();
      })
    );
  },

});
