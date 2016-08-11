// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);

    // this.on('enqueue', function(song) {
    //   alert('song added', song);
    //   this.add(song);
    
    //   if (this.length === 1) {
    //     this.playFirst();
    //   }
    // }, this);

    // this.on('dequeue', function(song) {
    //   this.remove(song);
    // }, this);
  },

  playFirst: function() {
    this.models[0].play(); 
  },

});