const { json } = require('body-parser');
const fetch = require('node-fetch');

const valvesModel = require('../models/valves');

exports.set_data = async (url, valves) => {
    try {

        let response = await fetch 
        (url, {
            method: 'POST',
            body: JSON.stringify(valves),
            headers: {'Content-Type': 'application/json'}
        });
        const json = await response.json();
        //console.log(json);
        return json;
    } catch (error) {
        console.log(error);
    }
};