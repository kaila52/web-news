const db = require('../model/dabase');

function find(nameURL) {
    return db.Category.findOne({ nameURL: nameURL })
}

function findID(id) {
    return db.Category.findOne({ _id: id })
}

function findAll() {
    return db.Category.find()
}

function create(name, nameURL) {
    return db.Category.create({ name: name, nameURL: nameURL })
}

function createDetail(id, detail, detailURL) {
    return db.Category.updateOne({ _id: id }, { $push: { category: { detail: detail, detailURL: detailURL } } })
}

function update(id, name, nameURL) {
    return db.Category.updateOne({ _id: id }, { name: name, nameURL: nameURL })
}

function updateDetail(id, idDetail, detail, detailURL) {
    return db.Category.updateOne({ "_id": id, "category._id": idDetail }, { $set: { 'category.$.detail': detail, 'category.$.detailURL': detailURL } })
}

function deletee(id) {
    return db.Category.deleteOne({ _id: id })
}

function deleteDetail(idDetail, detail) {
    return db.Category.update({}, { $pull: { category: { _id: idDetail, detail: detail } } }, { multi: true })
}

module.exports = {
    findAll,
    findID,
    find,
    create,
    createDetail,
    update,
    updateDetail,
    deletee,
    deleteDetail
}