const express = require('express');
const router = express.Router();
const axios = require('axios')

/* GET home page. */
router.get('/',async function (req, res, next) {
  const response = await axios.get('https://ptht.herokuapp.com/api/category')
  res.render('index', { title: 'Trang Chủ', category: response.data });
});
module.exports = router;
