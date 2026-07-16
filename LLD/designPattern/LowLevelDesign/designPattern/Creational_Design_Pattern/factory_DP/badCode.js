class Car {
    drive() {
        console.log('diriving Car');
    }
}
class Bike {
    drive() {
        console.log('diriving Bike');
    }
}
class cycle {
    drive() {
        console.log('diriving Cycle');
    }
}

let drivingType = 'car';

let mode;

if (drivingType == 'car') {
    mode = new Car();
} else if (drivingType == 'bike') {
    mode = new Bike();
} else if (drivingType == 'cycle') {
    mode = new cycle();
}
// here client  know how the object is created. // it shoudl not know
mode.drive();

// Now imagine adding:
// Taxi
// Metro
// Auto
// Helicopter

// The object creation logic keeps growing everywhere.

// Problems:
// Duplicate code
// Tight coupling
// Hard to maintain
// Violates the Open/Closed Principle (you modify existing client code whenever a new type is added)