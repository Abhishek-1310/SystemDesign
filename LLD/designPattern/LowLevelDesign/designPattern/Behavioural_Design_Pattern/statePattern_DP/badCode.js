class DirectionService {
    getETA(mode) {
        if (mode === "walking") {
            console.log("ETA: time 20 minutes");
        } else if (mode === "cycling") {
            console.log("ETA: time 10 minutes");
        } else if (mode === "car") {
            console.log("ETA: time 5 minutes");
        } else if (mode === "train") {
            console.log("ETA: time 2 minutes");
        }
    }
    getDirection(mode) {
        if (mode === "walking") {
            console.log("walking route");
        } else if (mode === "cycling") {
            console.log("cycling route");
        } else if (mode === "car") {
            console.log("car route");
        } else if (mode === "train") {
            console.log("train route");
        }
    }
}

let direction = new DirectionService();
direction.getETA("walking");
direction.getDirection("walking");

//suppose later we need add for flight we need to change getETA and getDirection
// so many if else complexity


// instead of asking what mode are you use
// state pattern solution
// we can make each mode responsible for itself.