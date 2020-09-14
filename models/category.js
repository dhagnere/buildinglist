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


const Category = module.exports = mongoose.model('Category', categorySchema);

//Get categories
module.exports.getCategories = function (callback, limit) {
  Category.find(callback).limit(limit).sort([['title', 'ascending']]);
}

//Add Category
module.exports.addCategory = function ( category ,callback) {
  Category.create(category , callback);
}

//Get single catgory by id
module.exports.getCategoryById = function ( id ,callback) {
  Category.findById(id , callback);
}

// Update Category
module.exports.updateCategory = function ( query, update, options, callback) {
  Category.findOneAndUpdate(query, update, options, callback);
}

//Remove category
module.exports.deleteCategory = function ( query, callback) {
  Category.deleteOne(query, callback);
}