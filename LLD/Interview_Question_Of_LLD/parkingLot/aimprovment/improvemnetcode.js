// ParkingSpotFactory (Factory Pattern)
// Current
// In main.js you do:
const bikeSpot1 = new ParkingSpot(101, SpotType.BIKESPOT);
const carSpot1 = new ParkingSpot(102, SpotType.CARSPOT);
const truckSpot1 = new ParkingSpot(103, SpotType.TRUCKSPOT);

// Imagine you have 1000 spots.


Create: factory / ParkingSpotFactory.js

class ParkingSpotFactory {
    static createSpot(id, type) {
        return new ParkingSpot(id, type);
    }
}
module.exports = ParkingSpotFactory;

Now in main.js
const bikeSpot = ParkingSpotFactory.createSpot(101, SpotType.BIKESPOT);
const carSpot = ParkingSpotFactory.createSpot(102, SpotType.CARSPOT);
const truckSpot = ParkingSpotFactory.createSpot(103, SpotType.TRUCKSPOT);


services / ParkingFeeCalculator.js
class ParkingFeeCalculator {
    calculate(ticket) {
    }
}
module.exports = ParkingFeeCalculator;


// Instead of
if (choice == "UPI")
    if (choice == "CARD")
        if (choice == "CASH")


            //do
            PaymentFactory

class PaymentFactory {
    static getPayment(type) {

        switch (type) {

            case PaymentType.UPI:
                return new UPI();

            case PaymentType.CARD:
                return new Card();

            case PaymentType.CASH:
                return new Cash();

            default:
                throw new Error("Invalid Payment");
        }
    }
}


const payment =
    PaymentFactory.getPayment(PaymentType.UPI);

const exitGate =
    new ExitGate(1, payment);

// See? Factory creates. Strategy executes. Very common interview combination.


// observer

class Observer {
    update(ticket) {
        throw new Error("Implement in subclass");
    }
}

module.exports = Observer;

const Observer = require("./observer");

class DisplayBoard extends Observer {

    update(ticket) {
        console.log("Display Board Updated");
    }

}

module.exports = DisplayBoard;

const Observer = require("./observer");

class SmsService extends Observer {

    update(ticket) {
        console.log("SMS Sent");
    }

}

module.exports = SmsService;

class ParkingNotifier {

    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notify(ticket) {
        for (const observer of this.observers) {
            observer.update(ticket);
        }
    }

}

module.exports = ParkingNotifier;


class EntryGate {

    constructor(gateId, parkingLot, notifier) {
        this.gateId = gateId;
        this.parkingLot = parkingLot;
        this.notifier = notifier;
    }

    parkVehicle(vehicle) {

        const spot = this.parkingLot.findAvailableSpot(vehicle);

        if (!spot) {
            throw new Error("Parking Full");
        }

        spot.parkVehicle(vehicle);

        const ticket = this.generateTicket(vehicle, spot);

        this.notifier.notify(ticket);

        return ticket;
    }

}

const notifier = new ParkingNotifier();

notifier.addObserver(new DisplayBoard());
notifier.addObserver(new SmsService());

const entryGate = new EntryGate(
    1,
    parkingLot,
    notifier
);

// Vehicle Parked
//        │
//        ▼
// EntryGate
//        │
//        ▼
// ParkingNotifier
//        │
//  ┌─────┴──────────┐
//  ▼                ▼
// DisplayBoard   SmsService