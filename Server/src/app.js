const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Globals = require('./common/globals');

//Connect to MongoDB
require('./db/mongoose');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS Enabled
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,PATCH');
        return res.status(200).json({});
    }

    Globals.DOMAIN = req.protocol;
    next();
});

app.get('', (req, res) => {
    res.render('/', {});
})

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;