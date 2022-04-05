const db = require('../util/database');

module.exports = class User {
    constructor(
        first_name, 
        last_name, 
        birth_date, 
        phone_number, 
        email_address, 
        password, 
        physical_address,
        city,
        state,
        country,
        user_status
        ) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.birth_date = birth_date;
        this.phone_number = phone_number;
        this.email_address = email_address;
        this.password = password;
        this.physical_address = physical_address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.user_status = user_status;
    }

    static find(email_address) {
        return db.execute('SELECT * FROM users WHERE email_address = ?', [email_address]);
    }

    static save(user) {
        return db.execute(
            'INSERT INTO users (first_name, last_name, birth_date, phone_number, email_address, password, physical_address, city, state, country, user_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
            [
                user.first_name, 
                user.last_name, 
                user.birth_date, 
                user.phone_number, 
                user.email_address,
                user.password,
                user.physical_address,
                user.city,
                user.state,
                user.country,
                user.user_status
            ]
        );
    }
};