const db = require('../model/dabase');

function findAll() {
    return db.News.find({})
}

function create(title, description, content, image, author) {
    return db.News.create({ title, description, content, image, author })
}

module.exports = {
    findAll,
    create
}