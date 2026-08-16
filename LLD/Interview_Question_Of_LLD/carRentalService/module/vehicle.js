const VehicleStatus = require('../enum/vehicalStatus');
class Vehicle {
    constructor(id, carType, pricePerDay, status) {
        this.id = id;
        this.carType = carType;
        this.pricePerDay = pricePerDay;
        this.status = status;
    }
    reserve() {
        if (this.status !== VehicleStatus.AVAILABLE) {
            throw new Error("Vehicle is not available for reservation");
        }

        this.status = VehicleStatus.RESERVED;
        console.log('car is reserved');
    }

    rent() {
        if (this.status !== VehicleStatus.RESERVED) {
            throw new Error("Vehicle must be reserved before renting");
        }

        this.status = VehicleStatus.RENTED;
        console.log('car is rented');
    }

    makeAvailable() {
        if (this.status !== VehicleStatus.RENTED) {
            throw new Error("Only rented vehicle can be made available");
        }

        this.status = VehicleStatus.AVAILABLE;
        console.log('car is available');
    }
}
module.exports = Vehicle;