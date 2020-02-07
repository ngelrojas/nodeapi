const Post = require('../models/post')
const formidable = require('formidable')
const fs = require('fs')

exports.getPosts = (req, res) => {
  const posts = Post.find()
    .populate('postedBy', '_id name')
    .select('_id title body')
    .then(posts => {
      res.json({posts})
    })
    .catch(err => console.log(err))
}

exports.createPost = (req, res, next) => {
  let form = formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({error: 'images could not be uploaded'})
    }
    let post = new Post(fields)
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    post.postedBy = req.profile
    if (files.photo) {
      post.photo.data = fs.readFileSync(files.photo.path)
      post.photo.contentType = files.photo.type
    }
    post.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: err,
        })
      }
      res.json(result)
    })
  })
  const post = new Post(req.body)
  post.save().then(result => {
    res.status(200).json({
      post: result,
    })
  })
}

exports.postByUser = (req, res) => {
  Post.find({postedBy: req.profile._id})
    .populate('postedBy', '_id name')
    .sort('_created')
    .exec((err, posts) => {
      if (err) {
        return res.status(400).json({
          error: err,
        })
      }
      res.json({posts})
    })
}
