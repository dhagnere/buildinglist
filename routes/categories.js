const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.render('categories', { title : 'categories'});
});

module.exports = router;
