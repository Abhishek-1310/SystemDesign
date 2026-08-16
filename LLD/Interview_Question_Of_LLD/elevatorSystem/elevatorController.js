const Direction = require('./enum/direction');

class ElevatorController {
    constructor() {
        this.elevators = [];
    }

    assignElevator(floor, direction) {
        let bestElevator = null;
        let minCost = Infinity;

        for (let elevator of this.elevators) {
            let cost = this.findCost(elevator, floor, direction);

            if (cost < minCost) {
                minCost = cost;
                bestElevator = elevator;
            }
        }

        return bestElevator;
    }

    findCost(elevator, floor, direction) {
        const dist = Math.abs(elevator.currFloor - floor);

        if (elevator.direction === Direction.IDLE) {
            return dist * 100;
        }

        const validElev =
            (elevator.direction === Direction.UP &&
                elevator.currFloor <= floor) ||
            (elevator.direction === Direction.DOWN &&
                elevator.currFloor >= floor);

        if (elevator.direction === direction && validElev) {
            return dist;
        }

        return dist * 1000;
    }

    addElevator(elevator) {
        this.elevators.push(elevator);
    }

    addRequest(user, floor, direction) {
        const elevator = this.assignElevator(floor, direction);

        if (!elevator) {
            throw new Error("No elevator available");
        }

        // Add hall request to elevator
        elevator.addRequest(floor, direction);
        elevator.addWaitingUser(user);

        // If elevator was idle, start processing
        if (elevator.direction === Direction.IDLE) {
            elevator.direction = direction;
            elevator.decideNextFloor();
        }
    }
}

module.exports = ElevatorController;