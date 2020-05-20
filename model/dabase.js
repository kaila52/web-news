const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:uMvIINmg0QG9hogT@cluster0-haiha.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const userSchema = new mongoose.Schema({
    fullname: String,
    user: String,
    email: String,
    password: String,
}, {
    collection: 'user'
})

const User = mongoose.model('user', userSchema)

module.exports = {
    User,
    
};