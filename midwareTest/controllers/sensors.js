// const {validationResult} = require('express-validator');

const Sensors = require('../models/sensors');

exports.fetchAll = async (req, res, next) => {
    try {
        const [allSensors] = await Sensors.fetchAll();
        res.status(200).json(allSensors);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}