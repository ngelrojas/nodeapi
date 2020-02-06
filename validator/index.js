exports.createPostValidator = (req, res, next) => {
  // title
  req.check('title', 'write a title').notEmpty()
  req.check('title', 'title must be between 4 to 150 characteres').isLength({
    min: 4,
    max: 150,
  })

  // body
  req.check('body', 'write a body').notEmpty()
  req.check('body', 'body must be between 4 to 2000 characteres').isLength({
    min: 4,
    max: 2000,
  })

  // check errors
  const errors = req.validationErrors()
  // if error shwo the first one as the happen
  if (errors) {
    const firstError = errors.map(error => error.msg)[0]
    return res.status(400).json({error: firstError})
  }
  // proceed to next middleware
  next()
}

exports.userSignupValidator = (req, res, next) => {
  // name is not null and between 4-10 characters
  req.check('name', 'Name si requerid').notEmpty()

  //email is not null, valid and normalized
  req
    .check('email', 'Email must be between 3 to 32 characters')
    .matches(/.+\@.+\..+/)
    .withMessage('Email mus contain @')
    .isLength({
      min: 4,
      max: 2000,
    })
  // check for password
  req.check('password', 'Password is required').notEmpty()
  req
    .check('password')
    .isLength({min: 6})
    .withMessage('password mus contain at leat 6 characteres')
    .matches(/\d/)
    .withMessage('must contain a number')
  // checl for errors
  const errors = req.validationErrors()
  if (errors) {
    const firstError = errors.map(error => error.msg)[0]
    return res.status(400).json({error: firstError})
  }
  next()
}
