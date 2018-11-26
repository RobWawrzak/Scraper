const mongoose = require('mongoose');

//Save a reference to the Schema constructor
const Schema = mongoose.Schema;

//Using schema constructor, create a new NoteSchema object
const NoteSchema = new Schema({
  noteText: String
});

const Note = mongoose.model('Note', NoteSchema);

//Export the note model
module.exports = Note;
