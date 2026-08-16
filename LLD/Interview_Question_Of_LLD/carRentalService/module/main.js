const Location = require('./location');
const Customer = require('./customer');
const Vehicle = require('./vehicle');
const Store = require('./store');
const RentalSystem = require('./rentalSystem');
const Payment = require('./payment/payment');
const VehicleStatus = require('../enum/vehicalStatus');
const Reservation = require('./reservation');
const Bill = require('./bill');
const Card = require('./payment/card');

let custloc1 = new Location(1, 3);
let storLoc1 = new Location(2, 4);
let storLoc2 = new Location(2, 3);
let storLoc3 = new Location(1, 5);
let cust1 = new Customer(1, 'Abhishek', custloc1);

const vehicle1 = new Vehicle(1, "SEDAN", 1500, VehicleStatus.AVAILABLE);

const vehicle2 = new Vehicle(2, "SUV", 2500, VehicleStatus.AVAILABLE);

const vehicle3 = new Vehicle(3, "HATCHBACK", 1200, VehicleStatus.RESERVED);

const vehicle4 = new Vehicle(4, "SEDAN", 1800, VehicleStatus.AVAILABLE);

const vehicle5 = new Vehicle(5, "SUV", 2500, VehicleStatus.AVAILABLE);

const vehicle6 = new Vehicle(6, "HATCHBACK", 1200, VehicleStatus.RESERVED);

const vehicle7 = new Vehicle(7, "SEDAN", 1800, VehicleStatus.AVAILABLE);

const store1 = new Store(storLoc1);
store1.addVehicle(vehicle1);
store1.addVehicle(vehicle2);
store1.addVehicle(vehicle3);

const store2 = new Store(storLoc2);
store2.addVehicle(vehicle5);
store2.addVehicle(vehicle6);
store2.addVehicle(vehicle7);



const rentalSystem = new RentalSystem();
rentalSystem.addStore(store1);
rentalSystem.addStore(store2);

let nearStore = rentalSystem.findNearestStore(custloc1);
let car = nearStore.findAvailableCars('SEDAN');
let selectedCar = car[0];
console.log("you have selected", selectedCar);

const reservation1 = new Reservation(1, custloc1, selectedCar, new Date("2026-08-13"), new Date("2026-08-16")
);

reservation1.reserve();
reservation1.pickup();
reservation1.complete();

const bill1 = new Bill(reservation1);

const card = new Card();

const payment = new Payment(bill1, card);

payment.pay();