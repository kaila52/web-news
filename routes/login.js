var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login');
});
router.post('/', function (req, res, next) {
  var email = req.body.email;
  var password = req.body.password;
  if (email == 'admin', password == '123') {
    res.cookie('admin',true)
    return res.redirect('/admin')
  }
  res.redirect('/login')
});

router.get('/password', function (req, res, next) {
  res.render('password');
});

router.get('/register', function (req, res, next) {
  res.render('register');
});

module.exports = router;
