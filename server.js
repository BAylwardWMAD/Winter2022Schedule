function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
const PORT = 1337;

// app.use(requireHTTPS);

app.use(express.static('./dist/winter2022'));

app.get('', (req, res) => {
    res.sendFile('index.html', { root: './dist/winter2022' });
});

app.listen(PORT || 8080, () => {});