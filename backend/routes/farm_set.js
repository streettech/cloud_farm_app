const express = require('express');

const { body } = require('express-validator');

const farmSetController = require('../controllers/farm_set');

const router = express.Router();

router.post(
    '/',
    [
        body('water_percent').trim().not().isEmpty(),
        body('water_toggle').trim().not().isEmpty(),
        body('light_toggle').trim().not().isEmpty()
    ], farmSetController.setFarm
);

module.exports = router;