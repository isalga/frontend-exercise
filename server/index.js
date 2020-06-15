const express = require('express');
const data = require('./recipes.json')
const app = express();
const port = 3000;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    next();
});

app.use(express.static('./dist'));

app.get('/api/recipes', (req, res) => {
    res.json(data);
});

if(process.env.NODE_ENV === 'production') {
    app.get('/', (req, res) => {
        res.sendFile('./index.html', { root: './dist' });
    });
}

app.listen(port, () => console.log(`listening on port ${port}!`));