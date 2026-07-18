const RideStatus = require("../Enum/RideStatus");

class Ride {
    constructor(
        rideId,
        passenger,
        driver,
        distance,
        fareStrategy
    ) {
        this.rideId = rideId;
        this.passenger = passenger;
        this.driver = driver;
        this.vehicle = driver.vehicle;
        this.distance = distance;
        this.fareStrategy = fareStrategy;

        this.status = RideStatus.PENDING;

        this.observers = [];
    }

    attach(observer) {
        this.observers.push(observer);
    }

    detach(observer) {
        this.observers = this.observers.filter(
            (obs) => obs !== observer
        );
    }

    notifyObservers(message) {
        this.observers.forEach((observer) =>
            observer.update(message)
        );
    }

    startRide() {
        this.status = RideStatus.ONGOING;
        this.notifyObservers("Ride Started");
    }

    completeRide() {
        this.status = RideStatus.COMPLETED;
        this.driver.available = true;
        this.notifyObservers("Ride Completed");
    }

    calculateFare() {
        return this.fareStrategy.calculateFare(
            this.distance,
            this.vehicle
        );
    }
}

module.exports = Ride;