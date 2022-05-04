const db = require('../util/database');

module.exports = class Sensors {
    constructor(
        water, 
        o2, 
        co2, 
        temperature,
        humidity,
        pressure
        ) {
        this.water = water;
        this.o2 = o2;
        this.co2 = co2;
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
    }

    static setAll(attr) {
        return {
            water: attr.water,
            o2: attr.o2,
            co2: attr.co2,
            temperature: attr.temperature,
            humidity: attr.humidity,
            pressure: attr.pressure
        }
    }

    static fetchAll() {
        return db.execute('SELECT * FROM farm');
    }
};