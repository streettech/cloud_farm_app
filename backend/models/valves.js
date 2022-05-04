module.exports = class Sensors {
    constructor(
        water_percent, 
        water_toggle, 
        light_toggle
        ) {
        this.water_percent = water_percent;
        this.water_toggle = water_toggle;
        this.light_toggle = light_toggle;
    }

    static setAll() {
        return {
            water_percent: this.water_percent,
            water_toggle: this.water_toggle,
            light_toggle: this.light_toggle
        }
    }
};