const express = require('express');

const { body } = require('express-validator');

const farmController = require('../controllers/farm');

const auth = require('../middleware/auth');

const router = express.Router();

router.get( '/', auth, farmController.fetchAll );

router.post(
    '/',
    [
        auth,
        body('user_id').trim().not().isEmpty(),
        body('name').trim().not().isEmpty(),
        body('ip').trim().not().isEmpty(),
        body('physical_address').trim(),
        body('city').trim(),
        body('state').trim(),
        body('country').trim(),
        body('farm_status').trim()
    ], farmController.deployFarm
);

router.delete('/:farm_id', auth, farmController.deleteFarm);

module.exports = router;