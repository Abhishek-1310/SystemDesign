const User = require('./User');
class Passenger extends User {
    constructor(id, name, location) {
        super(id, name, location);
    }

    update(message) {
        console.log(
            `Passenger ${this.name} received notification: ${message}`
        );
    }

    requestRide(destination, rideService) {
        return rideService.requestRide(this, destination);
    }
}

module.exports = Passenger;