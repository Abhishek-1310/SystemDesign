const ReservationStatus = require('../enum/reservationStatus');
class Reservation {
    constructor(id, customer, vehicle, pickupDate, returnDate, status) {
        this.id = id;
        this.customer = customer;
        this.vehicle = vehicle;
        this.pickupDate = pickupDate;
        this.returnDate = returnDate;
        this.status = status;
    }
    reserve() {
        this.status = ReservationStatus.CONFIRMED;
        this.vehicle.reserve();
    }
    cancel() {
        this.status = ReservationStatus.CANCELED;
        this.vehicle.makeAvailable();
    }
    pickup() {
        this.vehicle.rent();
    }
    complete() {
        this.status = ReservationStatus.COMPLETED;
        this.vehicle.makeAvailable();
    }
}

module.exports = Reservation;