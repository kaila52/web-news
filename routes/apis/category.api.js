const express = require('express');
const urlSlug = require('url-slug');
const router = express.Router();

const sevice = require('../../services/category.sevice')

//xem tất cả danh mục
router.get('/', function (req, res, next) {
  sevice.findAll()
    .then(data => {
      res.send(data)
    })
});

//Thêm danh mục
router.post('/', function (req, res, next) {
  console.log(req.body.name);
  const name = req.body.name;
  const nameURL = urlSlug(name, {
    separator: '-',
    transformer: urlSlug.transformers.lowercase
  });

  if (name == '') {
    return res.json({ status: 0 })
  }

  sevice.find(nameURL)
    .then(data => {
      if (data == null) {
        return sevice.create(name, nameURL)
          .then(res.json({ status: 1 }))
      }
      return res.json({ status: 0 })
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
    .then(res.json({ status: 1 }))
});
/*---------------------- detail ----------------------*/
//thêm chi tiết danh mục
router.post('/detail', function (req, res, next) {
  const id = req.body.id;
  const detail = req.body.detail;
  console.log(id,detail);
  const detailURL = urlSlug(detail, {
    separator: '-',
    transformer: urlSlug.transformers.lowercase
  });
  if (detail == '') {
    return res.json({ status: 0 })
  }
  sevice.findID(id)
    .then(data => {
      if (data == null) {
        return res.json({ status: 0 })
      }
      return sevice.createDetail(id, detail, detailURL)
        .then(res.json({ status: 1 }))
    })
});

//chỉnh sửa chi tiết danh mục
router.put('/detail', function (req, res, next) {
  const id = req.body.id;
  const idDetail = req.body.idDetail;
  const detail = req.body.detail;
  const detailURL = urlSlug(detail, {
    separator: '-',
    transformer: urlSlug.transformers.lowercase
  });
  console.log(id,idDetail, detail, detailURL);
  sevice.findID(id)
    .then(data => {
      if (data == null) {
        return res.json({ status: 0 })
      }
      sevice.updateDetail(id, idDetail, detail, detailURL)
        .then(res.json({ status: 1 }))
    })
});

//xóa chi tiết danh mục
router.delete('/detail', function (req, res, next) {
  const idDetail = req.body.idDetail;
  const detail = req.body.detail;
  console.log(idDetail, detail);
  sevice.deleteDetail(idDetail, detail)
    .then(data=>{
      res.json({ status: 1 })
    })
});

module.exports = router;
