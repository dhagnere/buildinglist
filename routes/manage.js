const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('MANAGE');
});

router.get('/buildings/add', (req, res, next) => {
  res.render('add_building', {title: 'Creation d\'une entité'});
});

router.get('/categories/add', (req, res, next) => {
  res.render('add_category', {title: 'Creation d\'une catégorie'});
});

module.exports = router;
