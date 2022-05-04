
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

    static fetchAll() {
        return {
            water: "g",
            o2: "g",
            co2: "g",
            temperature: "g",
            humidity: "g",
            pressure: "g"
        }
    }
};