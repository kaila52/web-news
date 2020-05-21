var express = require('express');
var router = express.Router();

var category = require('./category.api');
var post = require('./post.api');


//thể loại
router.get('/category',category);
//bài viết
router.get('/post',post);   

module.exports = router;
