const mongoose = require('mongoose');
const { Schema } = mongoose;

const teaTypeSchema = new Schema({
  title: String
});

mongoose.model('teaType', teaTypeSchema);
