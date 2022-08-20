const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    blog_topic: String,
    imgurl: String,
    despscription: String,
    date: Number,
})

module.exports = mongoose.model('blog', blogSchema);