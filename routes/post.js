const express = require('express')
const {
  getPosts,
  createPost,
  postByUser,
  postById,
  isPoster,
  deletePost,
  updatePost,
} = require('../controllers/post')
const {createPostValidator} = require('../validator')
const {requireSignin} = require('../controllers/auth')
const {userById} = require('../controllers/user')
const router = express.Router()

router.get('/posts', requireSignin, getPosts)
router.post('/post/new/:userId', requireSignin, createPost, createPostValidator)
router.get('/posts/by/:userId', requireSignin, postByUser)
router.delete('/post/:postId', requireSignin, isPoster, deletePost)
router.put('/post/:postId', requireSignin, isPoster, updatePost)

// any route containing :userid, our app will first execute userbyid
router.param('userId', userById)

// any route containing :postid, our app will first execute userbyid
router.param('postId', postById)

module.exports = router
