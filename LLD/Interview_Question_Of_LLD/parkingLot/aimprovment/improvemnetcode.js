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