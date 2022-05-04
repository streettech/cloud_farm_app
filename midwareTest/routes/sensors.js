const express = require('express');

const sensorsController = require('../controllers/sensors');

const router = express.Router();

router.post(
    '/', sensorsController.fetchAll
);

module.exports = router;