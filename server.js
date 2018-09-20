const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const config = require('./config/config.json');
const PORT = config.port;

const app = express();
app.use(bodyParser.json());

var myapi = require('./currency-api');

const handler = (req, res) => {
    var from = req.body.from;
    var to = req.body.to;

    myapi(from, to, (error, amount) => {
        if (error) {
            res.json(error.stack);
        } else {
            res.status(200).send({
                "amount": amount
            });
        }

    });
};

app.post('/convert', handler);

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log('App listening on ' + PORT);
});
