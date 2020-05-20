const express = require('express');
const urlSlug = require('url-slug');
const router = express.Router();

const sevice = require('../../services/category.sevice')

/* GET users listing. */
//xem tất cả danh mục
router.get('/', function (req, res, next) {
  sevice.findAll()
    .then(data => {
      res.send(data)
    })
});

//Thêm danh mục
router.post('/', function (req, res, next) {
  const name = req.body.name;
  const nameURL = urlSlug(name, {
    separator: '-',
    transformer: urlSlug.transformers.lowercase
  });

  sevice.find(nameURL)
    .then(data => {
      if (data == null) {
        return sevice.create(name, nameURL)
          .then(res.send('Success'))
      }
      res.send('Fail')
    })
});

//chỉnh sửa danh mục
router.put('/', function (req, res, next) {
  const id = req.body.id;
  const name = req.body.name;
  const nameURL = urlSlug(name, {
    separator: '-',
    transformer: urlSlug.transformers.lowercase
  });
  sevice.update(id, name, nameURL)
    .then(res.send('Success'))
});

//xóa danh mục
router.delete('/', function (req, res, next) {
  const id = req.body.id;
  sevice.deletee(id)
    .then(res.send('Success'))
});
/*---------------------- detail ----------------------*/
//thêm chi tiết danh mục
router.post('/detail', function (req, res, next) {
  const id = req.body.id;
  const detail = req.body.detail;
  const detailURL = urlSlug(detail, {
    separator: '-',
    transformer: urlSlug.transformers.lowercase
  });

  sevice.findID(id)
    .then(data => {
      if (data == null) {
        return res.send('Fail')
      }
      sevice.createDetail(id, detail, detailURL)
        .then(res.send('Success'))
    })
});

//chỉnh sửa chi tiết danh mục
router.put('/detail', function (req, res, next) {
  const idDetail = req.body.idDetail;
  const detail = req.body.detail;
  const detailURL = urlSlug(detail, {
    separator: '-',
    transformer: urlSlug.transformers.lowercase
  });

  sevice.findID(id)
    .then(data => {
      if (data == null) {
        return res.send('Fail')
      }

      sevice.updateDetail(id, idDetail, detail, detailURL)
        .then(res.send('Success'))
    })
});

//xóa chi tiết danh mục
router.delete('/detail', function (req, res, next) {
  const idDetail = req.body.idDetail;
  const detail = req.body.detail;
  sevice.deleteDetail(idDetail, detail)
    .then(res.send('Success'))
});

module.exports = router;
