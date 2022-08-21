const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
    blog_topic: String,
    imgurl: String,
    despscription: String,
})

module.exports = mongoose.model('blog', blogSchema);