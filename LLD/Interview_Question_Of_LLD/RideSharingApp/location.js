class Location {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceTo(otherLocation) {
        const dx = otherLocation.x - this.x;
        const dy = otherLocation.y - this.y;

        return Math.sqrt(dx ** 2 + dy ** 2);
    }
}
module.exports = Location;

