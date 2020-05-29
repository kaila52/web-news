var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/',async function(req, res, next) {
  const response = await axios.get('https://ptht.herokuapp.com/api/category')
  res.render('category',{ title: 'Category', category: response.data });

});

module.exports = router;