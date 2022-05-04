var url = 'http://192.168.10.155:2030';
const { json } = require('body-parser');
const fetch = require('node-fetch');

const sensorsModel = require('./models/sensors');

const get_data = async url => {
    try {
        const response = await fetch
        (url, {
            method: 'POST',
            body: JSON.stringify(sensorsModel.fetchAll()),
            headers: {'Content-Type': 'application/json'}
        });
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
};

setInterval( async () => {
    get_data(url)
    }, 10000 
);