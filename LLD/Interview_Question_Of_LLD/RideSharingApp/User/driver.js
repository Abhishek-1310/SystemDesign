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




const User = require('./User');

class Driver extends User {
    constructor(id, name, location, vehicle) {
        super(id, name, location);
        this.vehicle = vehicle;
        this.available = true;
        this.currentRide = null; // FIX: Keep track of the active ride here
    }

    // FIX: Fix copy-paste typo in notification log from previous versions
    update(message) {
        console.log(
            `Driver ${this.name} received notification: ${message}`
        );
    }

    // New Method: Driver triggers the start
    startCurrentRide(rideService) {
        if (!this.currentRide) {
            throw new Error("No active ride assigned to this driver.");
        }
        rideService.startRide(this.currentRide);
    }

    // New Method: Driver triggers the completion
    completeCurrentRide(rideService) {
        if (!this.currentRide) {
            throw new Error("No active ride to complete.");
        }
        const fare = rideService.completeRide(this.currentRide);
        
        // Clear the ride and make driver available again
        this.currentRide = null; 
        this.available = true;
        
        return fare;
    }
}

module.exports = Driver;
