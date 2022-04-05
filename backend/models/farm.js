const db = require('../util/database');

module.exports = class Farm {
    constructor(
        user_id, 
        name, 
        ip, 
        physical_address,
        city,
        state,
        country,
        farm_status
        ) {
        this.user_id = user_id;
        this.name = name;
        this.ip = ip;
        this.physical_address = physical_address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.farm_status = farm_status;
    }

    static fetchAll() {
        return db.execute('SELECT * FROM farms');
    }

    static save(farm) {
        return db.execute(
            'INSERT INTO farms (user_id, name, ip, physical_address, city, state, country, farm_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', 
            [
                farm.user_id,
                farm.name,
                farm.ip,
                farm.physical_address,
                farm.city,
                farm.state,
                farm.country,
                farm.farm_status
            ]
        );
    }

    static delete(farm_id) {
        return db.execute('DELETE FROM farms WHERE farm_id = ?', [farm_id]);
    }
};