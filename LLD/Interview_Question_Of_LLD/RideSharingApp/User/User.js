const Observer = require('../observerNotify');
class User extends Observer {
    constructor(id, name, location) {
        super()

        this.id = id;
        this.name = name;
        this.location = location;
    }
    update(message) {
        throw new Error('implement this methhod ')
    }
}
module.exports = User;