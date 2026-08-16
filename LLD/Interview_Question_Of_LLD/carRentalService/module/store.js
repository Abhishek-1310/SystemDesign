const VehicleStatus = require('../enum/vehicalStatus');
class Store {
    constructor(location) {
        this.vehicles = [];
        this.location = location
    }
    findAvailableCars(carType) {
        let aVehicles = [];
        for (let vehicle of this.vehicles) {
            if (vehicle.carType == carType && vehicle.status == VehicleStatus.AVAILABLE) {
                aVehicles.push(vehicle)
            }
        }
        console.log('your cars available');
        for (let car of aVehicles) {
            console.log(car);
        }
        console.log('........');
        return aVehicles;
    }
    addVehicle(vehicle) {
        this.vehicles.push(vehicle)
    }
}
module.exports = Store;