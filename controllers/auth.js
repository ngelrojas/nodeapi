const jwt = require('jsonwebtoken')
require('dotenv').config()
const User = require('../models/user')
const expressJwt = require('express-jwt')

exports.signup = async (req, res) => {
  const userExists = await User.findOne({email: req.body.email})
  if (userExists)
    return res.status(403).json({
      error: 'Email is taken!',
    })

  const user = await new User(req.body)
  await user.save()
  res.status(200).json({message: 'singup success! please login'})
}

exports.signin = (req, res) => {
  // find the user based on email
  const {email, password} = req.body
  User.findOne({email}, (err, user) => {
    // if err or no user
    if (err || !user) {
      return res.status(401).json({
        error: 'User with that email does not exist. please signin.',
      })
    }
    // if user si found make sure the email and passwod match
    // create authenticate method inmode and use here
    if (!user.authenticate(password)) {
      return res.status(401).json({
        error: 'email and password do not match.',
      })
    }

    // generate token
    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
    // persist the token 't' in cookie with expiry data
    res.cookie('t', token, {expire: new Date() + 999})
    // return response with user and token to frontend client
    const {_id, name, email} = user

    return res.json({token, user: {_id, email, name}})
  })
}

exports.signout = (req, res) => {
  res.clearCookie('t')
  return res.json({message: 'singout success!'})
}

exports.requireSignin = expressJwt({
  // if the token is valid, express jwt appends the verified users id
  // in an aauth key to the request object
  secret: process.env.JWT_SECRET,
  userProperty: 'auth',
})
