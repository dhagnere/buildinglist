const mongoose = require('mongoose');

//Category Schema
const categorySchema = mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  }
});


const Category = module.exports = moongoose.model('Category', categorySchema);