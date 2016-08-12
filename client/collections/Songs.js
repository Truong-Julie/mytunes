// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  defaults: {
    'userInput': undefined,
  },

  url: 'https://api.parse.com/1/classes/songs/',

  initialize: function () {
    this.fetch();
  }, 

  parse: function(response) {
    console.log(response.results);

    // if userInput is undefinded return normal parse else filter parse
    // userinput
    if (this['userInput'] === undefined) {
      return response.results;
    } else {
      return _.filter(response.results, function(song) {
        return song.title.includes(this['userInput']);
      }.bind(this));
    }
  }
});

