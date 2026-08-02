const Ticket = require('./ticket');
class EntryGate {
    constructor(gateId, parkingLot) {
        this.gateId = gateId;
        this.parkingLot = parkingLot;
    }

    parkVehicle(vehicle) {
        const spot = this.parkingLot.findAvailableSpot(vehicle);
        if (!spot) {
            throw new Error('Parking lot is full');
        }
        console.log('parking lot available and your spot is:', spot);
        spot.parkVehicle(vehicle);
        return this.generateTicket(vehicle, spot);
    }

    generateTicket(vehicle, spot) {
        let id = Date.now();
        let time = new Date();
        const ticket = new Ticket(id, vehicle, time, spot);
        console.log("your ticket is genrate: invoice:", ticket);
        return ticket;
    }
}
module.exports = EntryGate;