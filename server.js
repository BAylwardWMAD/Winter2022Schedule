function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(requireHTTPS);

app.use(express.static(`${__dirname}/dist/winter2022/`));

app.get('/*', (req, res) => {
    res.sendFile(`${__dirname}/dist/winter2022/index.html`);
});

app.listen(PORT, () => {});