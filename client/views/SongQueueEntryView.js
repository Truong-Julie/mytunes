// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  initialize: function () {
    this.render();
  },

  render: function () {
    console.log('rendered was called!!!!!!!!!!');
    this.$el.html("song");
    return this.$el;
  }
});
