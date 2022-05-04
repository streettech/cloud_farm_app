const express = require('express');

const { body } = require('express-validator');

const farmGet = require('../controllers/farm_get');

const router = express.Router();

router.get( '/', farmGet.fetchFarm );

module.exports = router;