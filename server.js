const express = require('express');
const http = require('http');

const config = require('./config/config.json');
const PORT = config.port;

const app = express();

const handler = (req, res) => {
    console.log('test')
    res.sendStatus(200);
};

app.post('/convert', handler);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('App listening on ' + PORT);
});
