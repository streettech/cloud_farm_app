const {validationResult} = require('express-validator');

const Farm_Get = require('../middleware/farm_get');

const url = 'http://192.168.10.155:2030';

exports.fetchFarm = async (req, res, next) => {
    try {
        const allSensors = (await Farm_Get.get_data(url));
        res.status(200).json(allSensors);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}