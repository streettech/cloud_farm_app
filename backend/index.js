var url = 'http://192.168.10.155:2030';

const express = require('express');

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const farmRoutes = require('./routes/farm');

const farmGetRoutes = require('./routes/farm_get');

const farmSetRoutes = require('./routes/farm_set');

const errorController = require('./controllers/error');

const app = express();

const applet = express();

const ports = process.env.PORT || 3000;

const portsSecondary = process.eventNames.PORT || 3400;

app.use(bodyParser.json());

applet.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

applet.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'application/json');
    next();
});

app.use('/auth', authRoutes);

app.use('/farm', farmRoutes);

applet.use('/farm_get', farmGetRoutes);

applet.use('/farm_set', farmSetRoutes);

app.use(errorController.get404);

app.use(errorController.get500);

app.listen(ports, () => console.log(`listenning on port ${ports}`));

applet.use(errorController.get404);

applet.use(errorController.get500);

applet.listen(portsSecondary, () => console.log(`listenning on port ${portsSecondary}`));