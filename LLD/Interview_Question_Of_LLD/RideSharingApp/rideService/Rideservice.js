const Ride = require('./ride')

class RideService {
    constructor(rideMatchingService) {
        this.rideMatchingService = rideMatchingService;
    }

    requestRide(
        rideId,
        passenger,
        distance,
        fareStrategy
    ) {
        const driver =
            this.rideMatchingService.findNearestDriver(
                passenger.location
            );

        if (!driver) {
            throw new Error("No drivers available.");
        }

        driver.available = false;

        const ride = new Ride(
            rideId,
            passenger,
            driver,
            distance,
            fareStrategy
        );

        ride.attach(passenger);
        ride.attach(driver);

        return ride;
    }

    startRide(ride) {
        ride.startRide();
    }

    completeRide(ride) {
        ride.completeRide();

        return ride.calculateFare();
    }
}

module.exports = RideService;