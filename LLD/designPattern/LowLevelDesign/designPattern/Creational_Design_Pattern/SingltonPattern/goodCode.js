// singlton :- only one object should exist
// what this is doing at the moment the constructor runs.

// When you write const myLogger = new Logger();, JavaScript executes these steps in order:
// It carves out an empty space in memory for a new object.
// It binds the keyword this to that empty space. Inside the constructor, this is how you talk to that specific piece of memory

// classes are just special functions, and functions are objects. This means you can attach properties directly to the class
// itself, rather than to the objects created by the class.
// logger.instance   attach one properite in object and assign memory by this


// Logger.instance is a custom static property that you create on the Logger class itself.
// It acts as a central storage slot (or a global cache) where the class keeps track of whether it has already created an 
// instance of itself.

// when you use new, a constructor always returns a brand-new this object. However, JavaScript allows you to override this 
// behavior by explicitly using a return statement inside the constructor.

//1 time when new write it will bypass with if then create object with this when 2nd times come went inside and return same object

// Singleton Pattern ensures that only one instance of a class exists throughout the application and provides a single global access point to that instance.
class Logger {
    constructor() {
        if (Logger.instance) {
            return Logger.instance;
        }
        console.log("Logger object is created");

        Logger.instance = this;
    }
    log(message) {
        console.log('Message:', message);
    }
}

// written three time but object created once
const l1 = new Logger();
const l2 = new Logger();
const l3 = new Logger();

// and you can check all object are same check compare two object and tell
console.log(l1 === l2);

l1.log("controller");
l2.log("service");
l3.log("database");
// The Breakdown
// this: In a JavaScript constructor, this represents the newly created object instance.
// Logger.instance: This creates (or updates) a static property directly on the Logger class itself, rather than on the
// individual object instance.
// The Assignment: By assigning this to Logger.instance, the class "remembers" the very first object that was created using it.