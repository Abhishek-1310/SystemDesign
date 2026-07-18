const User = require('./User');
class Driver extends User {
    constructor(id, name, location, vehicle) {
        super(id, name, location);
        this.vehicle = vehicle;
        this.available = true;
    }

    update(message) {
        console.log(
            `Passenger ${this.name} received notification: ${message}`
        );
    }
}
module.exports = Driver;