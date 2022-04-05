const {validationResult} = require('express-validator');

const Farm = require('../models/farm');

exports.fetchAll = async (req, res, next) => {
    try {
        const [allFarms] = await Farm.fetchAll();
        res.status(200).json(allFarms);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.deployFarm = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return

    const user_id = req.body.user_id;
    const name = req.body.name;
    const ip = req.body.ip;
    const physical_address = req.body.physical_address;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const farm_status = req.body.farm_status;

    try {
        const farm = {
            user_id: user_id,
            name: name,
            ip: ip,
            physical_address: physical_address,
            city: city,
            state: state,
            country: country,
            farm_status: farm_status
        };

        const result = await Farm.save(farm);

        res.status(201).json({ message: 'Farm Added!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.deleteFarm = async (req, res, next) => {
    try {
        const deleteResponse = await Farm.delete(req.params.farm_id);
        res.status(200).json(deleteResponse);
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}