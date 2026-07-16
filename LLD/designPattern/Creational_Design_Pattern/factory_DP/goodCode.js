//Factory Pattern provides a centralized way to create objects, allowing the client to request an object without knowing the 
//exact class or creation logic.
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

class VehicalRegistry {
    static vehical(mode) {
        if (mode == 'car') {
            return new Car();
        } else if (mode == 'bike') {
            return new Bike();
        } else if (mode == 'cycle') {
            return new cycle();
        }
        throw new Error('Invalid mode Type')
    }
}
let travel = VehicalRegistry.vehical('bike'); // this class create object
travel.drive();
// Now the client doesn't know how the object is created.

// Singleton controls:

// How many objects are created? Only ONE object.

// Factory controls:

// Which object should be created?