function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8080;
// const PORT = process.env.PORT || 1337;

app.use(requireHTTPS);

app.use(express.static(path.resolve(__dirname + '/dist/winter2022/')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/dist/winter2022/index.html'));
});

app.listen(PORT, () => {});