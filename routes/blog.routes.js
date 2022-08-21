const express = require('express')
const router = express.Router()
const ModelBlog = require('../model/blog.model')

router.get('/blogs/all', (req, res) => {
    ModelBlog.find((err, data) => {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
        return data
    })
})

router.get('/blogs/:id', (req, res) => {
    const id = req.params.id
    ModelBlog.findById(id, (err, data) =>{
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(200).send(data)
        }
    })
})

router.post('/blogs/create', (req, res) => {
    const Blogdata = req.body
    ModelBlog.create(Blogdata, (err, data) => {
        if(err) {
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    })
})


router.delete('/blogs/:id', (req, res) => {
    const id = req.params.id
    ModelBlog.findByIdAndDelete(id, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

router.put('/blogs/:id', (req, res) => {
    const id = req.params.id
    const blogdata = req.body
    ModelBlog.findByIdAndUpdate(id, blogdata, (err, data) => {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})

module.exports = router