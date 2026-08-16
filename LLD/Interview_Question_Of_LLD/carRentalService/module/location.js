class Location {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    distanceTo(shopLocation) {
        const dx = shopLocation.x - this.x;
        const dy = shopLocation.y - this.y;
        return Math.sqrt(dx ** 2 + dy ** 2);
    }
}

module.exports = Location;