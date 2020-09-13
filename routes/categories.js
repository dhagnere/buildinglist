const express = require('express');
const Category = require('../models/Category.js');
const router = express.Router();


router.get('/', (req, res, next) => {
  Category.getCategories((err, categories) => {
    if (err) {
      res.send(err);
    }
      res.render('categories', {
      title: 'categories',
      categories : categories
    });
  });
  
});

module.exports = router;
