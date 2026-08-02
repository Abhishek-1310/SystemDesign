const ParkingSpot = require('./modules/parkingSpot');
const Floor = require('./modules/floor');
const ParkingLot = require('./modules/parkingLot');
const Exitgate = require('./modules/exitgate');
const EntryGate = require('./modules/entrygate');
const Vehicle = require('./modules/vehicles');
const Card = require('./service/Card');
const Cash = require('./service/Cash');
const Upi = require('./service/Upi');

const VehicleType = require('./enums/vehicleType');
const SpotType = require('./enums/spotType')

const bikeSpot = new ParkingSpot(101, SpotType.BIKESPOT);
const carSpot = new ParkingSpot(102, SpotType.CARSPOT);
const truckSpot = new ParkingSpot(103, SpotType.TRUCKSPOT);


const floor1 = new Floor(1)

floor1.addParkingSpot(bikeSpot);
floor1.addParkingSpot(carSpot);
floor1.addParkingSpot(truckSpot);

const parkingLot = new ParkingLot(100);

parkingLot.addFloor(floor1);
const upi = new Upi();
const card = new Card();
const cash = new Cash();

const entryGate = new EntryGate(1, parkingLot);
const exitGate = new Exitgate(2, card);

const yamaha = new Vehicle('yaham101', VehicleType.BIKE);

const ticket = entryGate.parkVehicle(yamaha);
exitGate.exitVehicle(ticket);

// "Which design patterns did you use?"

// A good answer is:

// Strategy Pattern for different payment methods.
// Factory Pattern to create the appropriate payment strategy.
// Singleton Pattern for the ParkingLot because there should only be one parking lot instance.