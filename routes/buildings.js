const express = require('express');
const router = express.Router();
const Building = require('../models/Buildings.js');

router.get('/', (req, res, next) => {
  res.render('buildings' , { title: 'Bâtiments'});
});

router.get('/show/:id', (req, res, next) => {
  res.render('building' , { title: 'Bâtiment'});
});

router.get('/category/:category_id', (req, res, next) => {
  res.render('buildings' , { title: 'Catégorie des bâtiments.'});
});

//Add building - POST
router.post('/add', (req, res, next) => {
  let building = new Building();
  building.title = req.body.title;
  building.adress = req.body.adress;
  building.zip = req.body.zip;
  building.town = req.body.town;
  building.category = req.body.category;
  building.energy = req.body.energy;
  building.pdl = req.body.pdl;

  Building.addBuilding(building, (err, callback) => {
    if (err) {
      res.send(err);
    }
    res.redirect('/manage/buildings');
  });
});


module.exports = router;
