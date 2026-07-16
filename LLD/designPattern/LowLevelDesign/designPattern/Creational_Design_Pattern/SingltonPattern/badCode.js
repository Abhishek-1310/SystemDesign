// Suppose we're creating a logger.

// Every module creates its own logger.

class Logger {
    constructor() {
        console.log('Logger created!');
    }
    log(message) {
        console.log('Message:', message);
    }
}

const l1 = new Logger();
const l2 = new Logger();
const l3 = new Logger();

l1.log("controller");
l2.log("service");
l3.log("database");


// What's wrong?
// We created 3 logger objects.
// Imagine this is:

// Database Connection
// Redis Client
// AWS SDK Client
// Configuration Manager

// Creating multiple objects is unnecessary and can waste resources.


// Solution (Singleton)
// Now we'll allow only one object to exist.