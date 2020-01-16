const express = require('express');
const app = express();
const morgan = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
dotenv.config();

//db
//MONGO_URI=mongodb://localhost/database
mongoose.connect(
    process.env.MONGO_URI,
    { 
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log('DB connected') 
    })

mongoose.connection.on('error', err => {
    console.log(`connection error: ${err.message}`)
});

// bring in routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(expressValidator());
app.use('/', postRoutes);
app.use('/', authRoutes);

const port = process.env.PORT || 8080

app.listen(port, ()=>{
    console.log(`a node js api s listening on port: ${port}`);
});
