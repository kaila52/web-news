var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get('https://ptht.herokuapp.com/api/category').then(function (response) {
    res.render('single', { title: 'Trang Chủ', category: response.data });
  })
});

module.exports = router;