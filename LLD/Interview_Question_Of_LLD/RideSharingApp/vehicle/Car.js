const Vehicle = require('./Vehicle');

class Car extends Vehicle {
    constructor() {
        super();
    }
    getFarePerKm() {
        return 20;
    }
}

module.exports = Car;