class ParkingLot {
    constructor(id) {
        this.id = id;
        this.floors = [];
    }
    findAvailableSpot(vehicle) {
        for (let floor of this.floors) {
            const spot = floor.findParkingSpot(vehicle);
            if (spot) {
                console.log('one floor found for parking:');
                return spot;
            }
        }
    }
    addFloor(floor) {
        this.floors.push(floor);
    }

}
module.exports = ParkingLot;