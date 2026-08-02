const spotStatus = require('../enums/spotStatus');
class ParkingSpot {
    constructor(id, spotType) {
        this.id = id;
        this.spotType = spotType;
        this.spotStatus = spotStatus.FREE;
        this.vehicle = null;
    }
    parkVehicle(vehicle) {
        this.vehicle = vehicle;
        this.spotStatus = spotStatus.OCCUPIED;
        console.log('your vechicle', vehicle, 'is parked');
    }
    removeVehicle() {
        this.vehicle = null;
        this.spotStatus = spotStatus.FREE;
        console.log('your vechicle is removed');
    }
    isAvailable() {
        return this.spotStatus == spotStatus.FREE
    }

}
module.exports = ParkingSpot;