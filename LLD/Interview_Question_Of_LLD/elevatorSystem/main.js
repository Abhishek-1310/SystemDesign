const Elevator = require('./elevator');
const ElevatorController = require('./elevatorController');
const User = require('./user');
const Direction = require('./enum/direction');

const controller = new ElevatorController();

const elevator1 = new Elevator(
    1,
    1,
    Direction.IDLE
);

controller.addElevator(elevator1);

const user = new User("Abhishek", 5);

// User calls elevator
user.requestLift(controller, Direction.UP);

// console.log("User elevator:", user.elevator?.id);

// user.selectFloor(10);

user.selectFloor(8);
user.selectFloor(10);
user.selectFloor(12);

console.log("UP requests:", elevator1.upRequest);