const express = require('express');
const app = express();

const port = 3000;

app.get('/hello', (req, res) => {
    res.send('hello World');
});

app.listen(port, () => {
    console.info(`App rodando em http://localhost:${port}`);
});