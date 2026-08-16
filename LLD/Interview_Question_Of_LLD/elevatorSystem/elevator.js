const Direction = require('./enum/direction');
const { IdleState } = require('./elevatorState');

class Elevator {
    constructor(id, currFloor, direction) {
        this.id = id;
        this.currFloor = currFloor;
        this.state = new IdleState(this);
        this.direction = direction;

        this.upRequest = [];
        this.downRequest = [];

        this.waitingUsers = [];
        this.users = [];
    }

    setState(state) {
        this.state = state;
    }
    addWaitingUser(user) {
        this.waitingUsers.push(user);
    }

    addUser(user) {
        this.users.push(user);
    }

    pickupWaitingUsers() {
        for (const user of this.waitingUsers) {
            if (user.currFloor === this.currFloor) {
                this.pickupUser(user);
            }
        }

        this.waitingUsers = [];
    }

    pickupUser(user) {
        user.elevator = this;
        this.users.push(user);
    }

    addRequest(floor, direction) {
        if (direction === Direction.UP) {
            this.upRequest.push(floor);
            this.upRequest.sort((a, b) => a - b);
        } else {
            this.downRequest.push(floor);
            this.downRequest.sort((a, b) => b - a);
        }
    }

    addDestination(floor) {
        if (floor > this.currFloor) {
            this.upRequest.push(floor);
            this.upRequest.sort((a, b) => a - b);
        } else if (floor < this.currFloor) {
            this.downRequest.push(floor);
            this.downRequest.sort((a, b) => b - a);
        }
    }

    decideNextFloor() {
        if (this.direction === Direction.UP) {

            if (this.upRequest.length > 0) {
                const nextFloor = this.upRequest.shift();
                this.moveTo(nextFloor);

            } else if (this.downRequest.length > 0) {
                this.direction = Direction.DOWN;

                const nextFloor = this.downRequest.shift();
                this.moveTo(nextFloor);

            } else {
                this.direction = Direction.IDLE;
            }

        } else if (this.direction === Direction.DOWN) {

            if (this.downRequest.length > 0) {
                const nextFloor = this.downRequest.shift();
                this.moveTo(nextFloor);

            } else if (this.upRequest.length > 0) {
                this.direction = Direction.UP;

                const nextFloor = this.upRequest.shift();
                this.moveTo(nextFloor);

            } else {
                this.direction = Direction.IDLE;
            }
        }
    }

    moveTo(floor) {
        this.state.move(floor);
        console.log(`Elevator ${this.id} reached floor ${floor}`);
    }

    openDoor() {
        this.state.openDoor();
    }

    closeDoor() {
        this.state.closeDoor();
    }
}

module.exports = Elevator;