const db = require('../model/dabase');

function create(name, user, email, password) {
    return db.User.create({
        fullname: name,
        user: user,
        email: email,
        password: password,
    })
}

function update(id, name, user, email, password) {
    return db.User.updateOne({ _id: id }, {
        fullname: name,
        user: user,
        email: email,
        password: password,
    })
}

function deletes(id) {
    return db.User.deleteOne({ _id: id })
}