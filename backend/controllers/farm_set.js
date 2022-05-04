const {validationResult} = require('express-validator');

const Valves = require('../models/valves');

const FarmSet = require('../middleware/farm_set');

const url = 'http://192.168.10.155:2030';

exports.setFarm = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return

    const water_percent = req.body.water_percent;
    const water_toggle = req.body.water_toggle;
    const light_toggle = req.body.light_toggle;

    try {
        const valves = {
            water_percent: water_percent,
            water_toggle: water_toggle,
            light_toggle: light_toggle
        };

        const result = await FarmSet.set_data(url, valves);

        res.status(201).json({ message: 'Data Set!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}