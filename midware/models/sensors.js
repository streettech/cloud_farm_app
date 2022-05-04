//const { JSDOM } = require( 'jsdom' );
//const { window } = new JSDOM( "" );
//const $ = require( 'jquery' )( window );

//var url;

//var jq = $.getJSON()

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

    static fetchAll(url) {
        
    }
};