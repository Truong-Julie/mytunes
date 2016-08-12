// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    // this.collection.on('change', this.render, this);
  },

  render: function() {
    // for each song in songQueue collection , create a new SongQueueEntryView
    this.$el.children().detach();

    this.$el.html('<div class="queueHeader">Up Next</div>').append('<table><th>Artist</th><th>Song</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
