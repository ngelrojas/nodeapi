exports.createPostValidator = (req, res, next) => {
    // title
    req.check('title', "write a title").notEmpty();
    req.check('title', "title must be between 4 to 150 characteres").isLength({
        min: 4, 
        max: 150
    });

    // body 
    req.check('body', "write a body").notEmpty();
    req.check('body', "body must be between 4 to 2000 characteres").isLength({
        min: 4, 
        max: 2000
    });

    // check errors
    const errors = req.validationErrors()
    // if error shwo the first one as the happen
    if(errors){
        const firstError = errors.map((error) => error.msg )[0]
        return res.status(400).json({error: firstError});
    }
    // proceed to next middleware
    next();
}
