const VehicleType = require('../enums/vehicleType');
class Exitgate {
    constructor(id, paymentService) {
        this.id = id;
        this.paymentService = paymentService;
    }

    exitVehicle(ticket) {
        const amount = this.calculateAmount(ticket);
        this.paymentService.pay(amount);
        let spot = ticket.parkingSpot;
        spot.removeVehicle();
        console.log('thanks for using our parking')
        return amount;
    }
    calculateAmount(ticket) {
        let vehicleType = ticket.vehicle.vehicleType;
        let amount = 0;
        const duration = Math.ceil(
            (new Date() - ticket.entryTime) / (1000 * 60 * 60)
        );
        if (vehicleType === VehicleType.BIKE) {
            amount = duration * 10;
        } else if (vehicleType === VehicleType.CAR) {
            amount = duration * 15;
        } else if (vehicleType === VehicleType.TRUCK) {
            amount = duration * 20;
        }
        console.log('amount is calculated', amount);
        return amount;
    }
}
module.exports = Exitgate;