var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function (req, res, next) {
  axios.get('http://localhost:3000/api/category').then(function (response) {
    res.render('index', { title: 'Trang Chủ', category: response.data });
  })

});

module.exports = router;
