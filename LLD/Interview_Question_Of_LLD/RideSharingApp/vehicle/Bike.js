const Vehicle = require('./Vehicle');

class Bike extends Vehicle {
    constructor() {
        super();
    }
    getFarePerKm() {
        return 10;
    }
}

module.exports = Bike;