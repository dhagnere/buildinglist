const express = require('express');
const Category = require('../models/Category');
const Buildings = require('../models/Buildings');
const router = express.Router();



router.get('/buildings', (req, res, next) => {
  Buildings.getBuildings((err, buildings) => {
    if (err) {
      res.send(err);
    }res.render('manage_buildings', {
    title: 'Gestion des bâtiments',
    buildings : buildings});
  });
});

router.get('/categories', (req, res, next) => {
  Category.getCategories((err, categories) => {
    if (err) {
      res.send(err);
    }
      res.render('manage_categories', {
      title: 'Gestion des Catégories',
      categories : categories
    });
  });
});

router.get('/buildings/add', (req, res, next) => {
  Category.getCategories((err, categories) => {
    if (err) {
      res.send(err);
    }
    res.render('add_building', {
      title: "Création d'une entité",
      categories: categories
    });
  });
});

router.get('/categories/add', (req, res, next) => {
  res.render('add_category', {title: 'Creation d\'une catégorie'});
});

router.get('/buildings/edit/:id', (req, res, next) => {
  res.render('edit_building' , {title : 'Edition d\'un bâtiment'});
});

router.get('/categories/edit/:id', (req, res, next) => {
  Category.getCategoryById(req.params.id, (err, category) => {
    if (err) {
      res.send(err);
    }
    res.render('edit_category', {
      title: 'Edition d\'une catégorie',
      category: category
    });
  });
  
});
module.exports = router;
