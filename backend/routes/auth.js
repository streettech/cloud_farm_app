const express = require('express');

const { body } = require('express-validator');

const router = express.Router();

const User = require('../models/user');

const authController = require('../controllers/auth');

router.post(
    '/signup',
    [
        body('first_name').trim().not().isEmpty(),
        body('last_name').trim().not().isEmpty(),
        body('birth_date').isDate().withMessage('Enter valid date').not().isEmpty(),
        body('phone_number').trim().not().isEmpty(),
        body('email_address').isEmail().withMessage('Enter a valid email.')
        .custom(async (email_address) => {
            const user = await User.find(email_address);
            if (user[0].length > 0) {
                return Promise.reject('Email address already exist.')
            }
        })
        .normalizeEmail(),
        body('password').trim().isLength({ min: 7}),
        body('physical_address').trim().not().isEmpty(),
        body('city').trim().not().isEmpty(),
        body('state').trim().not().isEmpty(),
        body('country').trim().not().isEmpty(),
        body('user_status').trim().not().isEmpty()
    ], authController.signup
);

router.post('/login', authController.login);

module.exports = router;