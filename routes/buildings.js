const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('buildings' , { title: 'Bâtiments'});
});

router.get('/show/:id', (req, res, next) => {
  res.render('building' , { title: 'Bâtiment'});
});

router.get('/category/:category_id', (req, res, next) => {
  res.render('buildings' , { title: 'Catégorie des bâtiments.'});
});



module.exports = router;
