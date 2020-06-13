const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./dist'));

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: './dist' });
});

app.listen(port, () => console.log(`listening on port ${port}!`));