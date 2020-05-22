var express = require('express');
var router = express.Router();
const sevice = require('../../services/post.sevice')

/* GET users listing. */
router.get('/', function (req, res, next) {
  sevice.findAll().then(data => {
    res.json(data)
  })
});
router.post('/', function (req, res, next) {
  const category = req.body.category;
  const title = req.body.title;
  const description = req.body.description;
  const content = req.body.content;
  const image = req.body.image;
  const author = req.body.author;
  sevice.create(category, title, description, content, image, author)
    .then(res.send("success"))
  //tạo bài viết
});
router.put('/', function (req, res, next) {
  //sửa bài viết
});
router.delete('/', function (req, res, next) {
  //xóa bài viết
});

module.exports = router;
