const db = require('../model/dabase');

function find(name) {
    return db.Category.findOne({ name: name })
}
function create(names) {
    return db.Category.create({ name: names })
}
module.exports = {
    find,
    create
}