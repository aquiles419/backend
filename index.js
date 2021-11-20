const express = require('express');
const cors = require('cors');
const http  = require('http');

const router = require('./src/routes/routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);


const port        = process.env.PORT || 8080;
const host        = process.env.HOSTNAME || '0.0.0.0';
const httpServer  = http.Server(app);

let listeningCallback;
// Launch Node.js server
httpServer.listen(port, host, () => {
    console.log(`Node.js API server is listening on http://${host}:${port}/`);
    if (listeningCallback) {
        listeningCallback();
    }
});


httpServer.init = function (cb) {
    if (!httpServer.listening) {
        listeningCallback = cb;
    } else {
        cb();
    }
};
