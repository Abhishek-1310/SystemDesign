class RentalSystem {
    constructor() {
        this.stores = [];
    }
    findNearestStore(customerLocation) {
        let minDist = Infinity;
        let nearestStore = null;
        for (let store of this.stores) {
            let dist = customerLocation.distanceTo(store.location)
            if (dist < minDist) {
                minDist = dist;
                nearestStore = store;
            }
        }
        return nearestStore;
    }
    addStore(store) {
        this.stores.push(store)
    }
}
module.exports = RentalSystem;