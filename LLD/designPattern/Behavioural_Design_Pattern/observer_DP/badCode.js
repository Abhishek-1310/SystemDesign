class WeatherStation {
    setTemprature(temp) {
        this.temprature = temp;

        mobileDevice.update(temp);
        websiteDevice.update(temp);
        ledDisplay.update(temp);
    }
}

// looks ok right but when tomorrow we have to add 50 device how you will do one by one

// now weatherStation know every display that is tight coupling
// what if tomorrow u need to remove ledDisplay we need to modify wetherStation

// this problem violates one of the most important principle
// open to extension, closed for modification


// so use Observer pattern