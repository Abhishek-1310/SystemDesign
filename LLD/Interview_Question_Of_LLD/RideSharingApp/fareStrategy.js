class FareStrategy {
    calculateFare(distance, vehicle) {
        throw new Error("Implement calculateFare()");
    }
}


class StandardFare extends FareStrategy {
    calculateFare(distance, vehicle) {
        return distance * vehicle.getFarePerKm();
    }
}

class LuxuryFare extends FareStrategy {
    calculateFare(distance, vehicle) {
        return distance * vehicle.getFarePerKm() * 2;
    }
}

class SharedFare extends FareStrategy {
    calculateFare(distance, vehicle) {
        return distance * vehicle.getFarePerKm() * 0.7;
    }
}

module.exports = { StandardFare, LuxuryFare, SharedFare };