const express = require('express');
const Category = require('../models/Category');
const Buildings = require('../models/Buildings');
const router = express.Router();


//Show all buildings
router.get('/buildings', (req, res, next) => {
  Buildings.getBuildings((err, buildings) => {
    if (err) {
      res.send(err);
    }res.render('manage_buildings', {
    title: 'Liste des bâtiments ou entités de la ville de Coudekerque-Branche',
    buildings : buildings});
  });
});

//Show all categories
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

//Add a building including his category
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



//Edit category Page - GET
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
  //EDIT building Page - GET
  router.get('/buildings/edit/:id', (req, res, next) => {
    Buildings.getBuildingById(req.params.id, (err, building) => {
      if (err) {
        res.send(err);
      }
      Category.getCategories((err, categories) => {
        res.render('edit_building', {
          title: 'Edition d\'un batiment ou entité',
          building: building,
          categories: categories
        });
      });
    });
});

module.exports = router;
