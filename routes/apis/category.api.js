const express = require('express');
const urlSlug = require('url-slug');
const router = express.Router();

const sevice = require('../../services/category.sevice')

/* GET users listing. */
router.get('/', function (req, res, next) {
  urlSlug('á é í ó ú Á É Í Ó Ú ç Ç æ Æ œ Œ ® © € ¥ ª º ¹ ² ½ ¼', {
    separator: '-',
    transformer: urlSlug.transformers.uppercase
  })

});
router.post('/', function (req, res, next) {
  const name = req.body.name;
  sevice.find(name)
    .then(data => {
      if (data == null) {
        return sevice.create(name)
          .then(res.send('Success'));
      }
      res.send('Fail')
    })


});
router.put('/', function (req, res, next) {
  //sửa tên danh mục
});
router.delete('/', function (req, res, next) {
  //xóa danh mục
});

module.exports = router;
