class Vehicle {
    constructor(vehicleNumber) {
        this.vehicleNumber = vehicleNumber;
    }

    getFarePerKm() {
        throw new Error("getFarePerKm() must be implemented");
    }
}
module.exports = Vehicle;