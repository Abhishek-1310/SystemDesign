// instead of knowing every display individually, weather station only knows "I have a list of observers"
// when temprature change weather station say notify everyone, it doesn't care how many observers is there 


// observer (base class)
class Observer {
    update(temp) {
        throw new Error("Update method must be implemented")
    }
}
// concrete Observers 
class MobileDisplay extends Observer {
    update(temp) {
        console.log(`mobile display: ${temp}c`);
    }
}
class WebsiteDisplay extends Observer {
    update(temp) {
        console.log(`Website display: ${temp}c`);
    }
}
class LedDisplay extends Observer {
    update(temp) {
        console.log(`Led display: ${temp}c`);
    }
}

// subject
class WeatherStation {
    constructor() {
        this.temp = 0;
        this.observer = [];
    }

    subscribe(obs) {
        this.observer.push(obs);
    }

    unsubscribe(obs) {
        this.observer = this.observer.filter(ob => ob != obs);
    }

    notifyObservers() {
        for (let obser of this.observer) {
            obser.update(this.temp);
        }
    }
    setTemprature(temp) {
        console.log("temprature changed to", temp);

        this.temp = temp;
        this.notifyObservers();
    }
}

const weatherStation = new WeatherStation();

const mobile = new MobileDisplay();
const website = new WebsiteDisplay();
const led = new LedDisplay();

// Subscribe displays
weatherStation.subscribe(mobile);
weatherStation.subscribe(website);
weatherStation.subscribe(led);

// Temperature changes
weatherStation.setTemprature(25);

weatherStation.setTemprature(30);

weatherStation.unsubscribe(led);

weatherStation.setTemprature(40);