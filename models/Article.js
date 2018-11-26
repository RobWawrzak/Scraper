const mongoose = require('mongoose');

//Save a reference to the Schema constructor
const Schema = mongoose.Schema;

//Using schema constructor, create a new NoteSchema object
// required: headline, url, summary, saved, ref to notes schema
const ArticleSchema = new Schema({
  headline: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  saved: {
    type: Boolean,
    default: false
  },
  note: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Note'
    }
  ]
});

const Article = mongoose.model('Article', ArticleSchema);

//Export the note model
module.exports = Article;
