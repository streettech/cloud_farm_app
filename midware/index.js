const express = require('express');

//const bodyParser = require('body-parser');

const app = express();

const ports = process.env.PORT || 3001;

//app.use(bodyParser.json());

//app.use((req, res, next) => {
    //res.setHeader('Access-Control-Allow-Origin', '*');
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    //res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    //next();
//});

app.listen(ports, () => console.log(`listenning on port ${ports}`));