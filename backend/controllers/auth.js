const {validationResult} = require('express-validator');

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return

    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const birth_date = req.body.birth_date;
    const phone_number = req.body.phone_number;
    const email_address = req.body.email_address;
    const password = req.body.password;
    const physical_address = req.body.physical_address;
    const city = req.body.city;
    const state = req.body.state;
    const country = req.body.country;
    const user_status = req.body.user_status;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);

        const userDetails = {
            first_name: first_name,
            last_name: last_name,
            birth_date: birth_date,
            phone_number: phone_number,
            email_address: email_address,
            password: hashedPassword,
            physical_address: physical_address,
            city: city,
            state: state,
            country: country,
            user_status: user_status
        };

        const result = await User.save(userDetails);

        res.status(201).json({ message: 'User registered!' });
    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}

exports.login = async (req, res, next) => {

    const email_address = req.body.email_address;

    const password = req.body.password;

    try {
        const user = await User.find(email_address);

        if (user[0].length !== 1) {
            const error = new Error('The user with this email could not be found.');
            error.statusCode = 401;
            throw error;
        }

        const storedUser = user[0][0];

        const isEqual = await bcrypt.compare(password, storedUser.password);

        if (!isEqual) {
            const error = new Error('Incorrect Password!');
            error.statusCode = 401;
            throw error;
        }

        const token = jwt.sign({
            email_address: storedUser.email_address,
            userId: storedUser.user_id
        },
        'secretfortoken',
        { expiresIn: '1h' }
        );

        res.status(200).json({ token: token, userId: storedUser.user_id });

    } catch (err) {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    }
}