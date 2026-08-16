class Bill {
    constructor(reservation) {
        this.reservation = reservation;
    }

    calculateAmount() {
        let ppd = this.reservation.vehicle.pricePerDay;
        let ms = this.reservation.returnDate - this.reservation.pickupDate;
        let day = ms / (1000 * 60 * 60 * 24);
        return ppd * day;
    }
}

module.exports = Bill;

// milliseconds * 1000
//      ↓
// seconds * 60
//      ↓
// minutes * 60
//      ↓
// hours * 24
//      ↓
// days