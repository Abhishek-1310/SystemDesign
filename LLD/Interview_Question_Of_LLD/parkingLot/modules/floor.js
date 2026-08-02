class Floor {
    constructor(id) {
        this.id = id;
        this.parkingSpot = [];
    }
    findParkingSpot(vehicle) {
        for (let spot of this.parkingSpot) {
            if (spot.isAvailable() && spot.spotType === vehicle.vehicleType) {
                console.log('one spot found for parking');
                return spot;
            }
        }
        return null;
    }
    addParkingSpot(spot) {
        this.parkingSpot.push(spot);
    }
}
module.exports = Floor;