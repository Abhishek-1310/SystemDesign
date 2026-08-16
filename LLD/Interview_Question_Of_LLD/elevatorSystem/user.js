class User {
    constructor(name, currFloor) {
        this.name = name;
        this.currFloor = currFloor;
        this.elevator = null;
    }

    requestLift(controller, direction) {
        controller.addRequest(
            this,
            this.currFloor,
            direction
        );
    }

    selectFloor(floor) {
        if (!this.elevator) {
            throw new Error("User is not inside an elevator");
        }

        this.elevator.addDestination(floor);
        this.elevator.closeDoor();
    }
}

module.exports = User;