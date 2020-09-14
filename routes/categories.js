const express = require('express');
const Category = require('../models/Category.js');
const router = express.Router();

//Get category GET
router.get('/', (req, res, next) => {
  Category.getCategories((err, categories) => {
    if (err) {
      res.send(err);
    }
      res.render('categories', {
      title: 'Catégories',
      categories : categories
    });
  });
});

//Add category POST
router.post('/add', (req, res, next) => {
  let category = new Category();
  category.title = req.body.title;
  category.description = req.body.description;

  Category.addCategory(category, (err, callback) => {
    if (err) {
      res.send(err)
    }
    res.redirect('/manage/categories');
  });
});

//Edit category POST
router.post('/edit/:id', (req, res, next) => {
  let category = new Category();
  const query = {_id: req.params.id}
  const update = {title: req.body.title, description: req.body.description}

  Category.updateCategory(query, update, {}, (err, callback) => {
    if (err) {
      res.send(err)
    }
    res.redirect('/manage/categories');
  });
});

//Delete category - DELETE
router.delete('/delete/:id', (req, res, next) => {
    const query = {_id: req.params.id}
    Category.deleteCategory(query , (err ,callback) => {
    if (err) {
      res.send(err)
    }
    res.status(200);
  });
});




module.exports = router;
