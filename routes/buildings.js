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
  building.category = req.body.category;
  building.adress = req.body.adress;
  building.zip = req.body.zip;
  building.town = req.body.town;
  building.energy = req.body.energy;
  building.pdl = req.body.pdl;

  Building.addBuilding(building, (err, callback) => {
    if (err) {
      res.send(err);
    }
    res.redirect('/manage/buildings');
  });
});


//EDIT BUILDING -POST
router.post('/edit/:id', (req, res, next) => {
  let building = new Building();
  const query = {_id: req.params.id}
  const update = {
    title: req.body.title,
    category: req.body.category,
    adress : req.body.adress,
    zip : req.body.zip,
    town : req.body.town,
    energy : req.body.energy,
    pdl : req.body.pdl
  }

  Building.updateBuilding(query, update, {}, (err, callback) => {
    if (err) {
      res.send(err)
    }
    res.redirect('/manage/buildings');
  });
});

//Delete category - DELETE
router.delete('/delete/:id', (req, res, next) => {
  const query = {_id: req.params.id}
  Building.deleteBuilding(query , (err ,callback) => {
  if (err) {
    res.send(err)
  }
  res.status(200);
  });
});


module.exports = router;
