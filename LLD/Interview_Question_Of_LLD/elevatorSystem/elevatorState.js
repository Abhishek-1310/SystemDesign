class ElevatorState {
    move() {
        throw new Error("Not implemented");
    }

    openDoor() {
        throw new Error("Not implemented");
    }

    closeDoor() {
        throw new Error("Not implemented");
    }
}
class IdleState extends ElevatorState {
    constructor(elevator) {
        super();
        this.elevator = elevator;
    }
    move(floor) {
        console.log("Elevator starts moving");
        this.elevator.setState(new MovingState(this.elevator));
        this.elevator.state.move(floor);

    }

    openDoor() {
        this.elevator.setState(new DoorOpenState(this.elevator));
        console.log("Opening door");
    }

    closeDoor() {
        throw new Error("Door is already closed");
    }
}
class MovingState extends ElevatorState {
    constructor(elevator) {
        super();
        this.elevator = elevator;
    }
    move(floor) {
        console.log(`Elevator ${this.elevator.id} moving to floor ${floor}`);
        this.elevator.currFloor = floor;

        console.log(`Reached floor ${floor}`);
        this.elevator.pickupWaitingUsers();

        this.elevator.setState(
            new DoorOpenState(this.elevator)
        );
    }

    openDoor() {
        throw new Error("can't open elevator moving");
    }

    closeDoor() {
        throw new Error("Door is already closed");
    }
}
class DoorOpenState extends ElevatorState {
    constructor(elevator) {
        super();
        this.elevator = elevator;
    }
    move() {
        throw new Error("can't move door opened");
    }

    openDoor() {
        throw new Error("already opened");
    }

    closeDoor() {
        console.log("closing the door");
        if (this.elevator.upRequest.length > 0 || this.elevator.downRequest.length > 0) {
            this.elevator.setState(new MovingState(this.elevator));
            this.elevator.decideNextFloor();
        } else {
            this.elevator.setState(new IdleState(this.elevator));
        }
    }

}

module.exports = {
    DoorOpenState, MovingState, IdleState, ElevatorState
}

//"The elevator's behavior changes based on its current state, and there are multiple state-dependent behaviors. To avoid large conditional statements, I can use the State Pattern to encapsulate state-specific behavior."