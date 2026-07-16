class TravelMode {
    getETA() {
        throw new Error('implement this method');
    }
    getDirection() {
        throw new Error('implement this method');
    }
}

class Walking extends TravelMode {
    getETA() {
        console.log("ETA: time 20 minutes");
    }
    getDirection() {
        console.log("walking route");
    }
}
class Cycling extends TravelMode {
    getETA() {
        console.log("ETA: time 10 minutes");
    }
    getDirection() {
        console.log("cycling route");
    }
}
class Car extends TravelMode {
    getETA() {
        console.log("ETA: time 5 minutes");
    }
    getDirection() {
        console.log("car route");
    }
}
class Train extends TravelMode {
    getETA() {
        console.log("ETA: time 2 minutes");
    }
    getDirection() {
        console.log("train route");
    }
}
class DirectionService {
    constructor(mode) {
        this.mode = mode;
    }
    setMode(mode) {
        this.mode = mode;
    }
    getETA() {
        this.mode.getETA();
    }
    getDirection() {
        this.mode.getDirection();
    }
}
let train = new Train();
let direction = new DirectionService(train);
direction.getETA();
direction.getDirection();

// if else complexity 
// now easily you can add different service flight boat

