// Models
const Location = require("../location");
const Passenger = require("../User/passanger");
const Driver = require("../User/driver");

// Vehicles
const Car = require("../vehicle/Car");
const Bike = require("../vehicle/Bike");

// Strategies
const {
    StandardFare,
    SharedFare,
    LuxuryFare,
} = require("../fareStrategy");

// Services
const RideMatchingService = require("../rideService/rideMatchingService");
const RideService = require("../rideService/Rideservice");

const drivers = [
    new Driver(1, "Ravi", new Location(10, 25), new Car()),
    new Driver(2, "Aman", new Location(15, 25), new Bike()),
    new Driver(3, "Rohit", new Location(12, 15), new Car()),
];

const passenger = new Passenger(
    101,
    "Abhishek",
    new Location(12, 18)
);

const rideMatchingService = new RideMatchingService(drivers);
const rideService = new RideService(rideMatchingService);

const fareStrategy = new StandardFare();
// const fareStrategy = new SharedFare();
// const fareStrategy = new LuxuryFare();

const ride = rideService.requestRide(
    1,
    passenger,
    10,
    fareStrategy
);

rideService.startRide(ride);
const fare = rideService.completeRide(ride);

console.log("Fare:", fare);