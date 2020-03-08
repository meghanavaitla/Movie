var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var movieSchema = new Schema({
  title: String,
  fullplot: String,
  year: Number,
  poster: String,
  imdb: {
    rating: Number,
    votes: Number,
    id: String
  }
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
