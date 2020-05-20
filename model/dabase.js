const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:NTbpNNRorsV82WxZ@cluster0-haiha.mongodb.net/tintuc?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    fullname: String,
    user: String,
    email: String,
    password: String,
    Roleid: [{ type: Schema.Types.ObjectId, ref: 'role' }]

}, {
    collection: 'user'
})

const roleSchema = new mongoose.Schema({
    name: String,
    status: String
}, {
    collection: 'role'
})

const categorySchema = new mongoose.Schema({
    name: String,
    nameURL: String,
    category: [{ detail: String, detailURL: String }],
}, {
    collection: 'category'
})

const newsSchema = new mongoose.Schema({
    title: String,
    description: String,
    content: String,
    comment: [{ type: Schema.Types.ObjectId, ref: 'comments' }],
    author: { type: Schema.Types.ObjectId, ref: 'user' },
}, {
    collection: 'news'
})

const commentsSchema = new mongoose.Schema({
    userid: { type: Schema.Types.ObjectId, ref: 'user' },
    comment: String,
    like: Object,
}, {
    collection: 'comments'
})


const User = mongoose.model('user', userSchema);
const Role = mongoose.model('post', roleSchema);
const Category = mongoose.model('category', categorySchema);
const News = mongoose.model('news', newsSchema);
const Comments = mongoose.model('comments', commentsSchema);


module.exports = {
    User,
    Role,
    Category,
    News,
    Comments
};