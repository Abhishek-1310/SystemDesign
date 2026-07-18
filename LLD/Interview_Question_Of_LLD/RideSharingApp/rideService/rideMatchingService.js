class RideMatchingService {
    constructor(drivers) {
        this.drivers = drivers;
    }

    findNearestDriver(passengerLocation) {
        let nearestDriver = null;
        let minimumDistance = Infinity;

        for (const driver of this.drivers) {

            if (!driver.available) continue;

            const distance = driver.location.distanceTo(passengerLocation);

            if (distance < minimumDistance) {
                minimumDistance = distance;
                nearestDriver = driver;
            }
        }

        return nearestDriver;
    }
}

module.exports = RideMatchingService;