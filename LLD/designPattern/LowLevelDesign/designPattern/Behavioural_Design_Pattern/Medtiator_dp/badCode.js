class User {
    constructor(name) {
        this.name = name;
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    send(message) {
        for (const user of this.users) {
            user.receive(this.name, message);
        }
    }
    receive(sender, message) {
        console.log(`${sender}: ${message}`);
    }
}
const alice = new User("Alice");
const bob = new User("Bob");
const charlie = new User("Charlie");

alice.addUser(bob);
alice.addUser(charlie);

bob.addUser(alice);
bob.addUser(charlie);

charlie.addUser(alice);
charlie.addUser(bob);

charlie.send('hi everyone how are u');

// problem here is when 100 user come everyone have to know each others there is huge coupling
//imagine whatsapp millions of users can everyone user know every other user := no

// soution is mediator pattern
// instead of everyuser knows only chatroom
// chatroom know all users
