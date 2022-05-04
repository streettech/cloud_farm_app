
const { json } = require('body-parser');
const fetch = require('node-fetch');

const sensorsModel = require('../models/sensors');

exports.get_data = async url => {
    try {
        const response = await fetch
        (url, {
            method: 'POST',
            body: JSON.stringify(sensorsModel.fetchAll()),
            headers: {'Content-Type': 'application/json'}
        });
        const json = await response.json();
        //console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }
};