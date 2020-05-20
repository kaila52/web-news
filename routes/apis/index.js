var express = require('express');
var app = express();

var category = require('./category.api');
var post = require('./post.api');


//thể loại
app.use('/category', category);
//bài viết
app.use('/post', post);

module.exports = app;
