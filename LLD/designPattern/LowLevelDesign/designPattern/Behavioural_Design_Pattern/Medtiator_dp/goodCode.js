class ChatMediator {
    addUser(user) {
        throw new Error("Implement this method");
    }
    sendMessage(message, sender) {
        throw new Error("Implement this method");
    }
}

class Chatroom extends ChatMediator {
    constructor() {
        super();
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
    }
    sendMessage(message, sender) {
        for (const user of this.users) {
            if (user !== sender) {
                user.receive(message, sender.name);
            }
        }
    }
}

class User {
    constructor(name, chatRoom) {
        this.name = name;
        this.chatRoom = chatRoom;
    }
    send(message) {
        console.log(`${this.name} sends: ${message}`);
        this.chatRoom.sendMessage(message, this);
    }
    receive(message, sender) {
        console.log(`${this.name} received from ${sender}:${message}`)
    }
}

const chatRoom = new Chatroom();

const alice = new User("Alice", chatRoom);
const bob = new User("Bob", chatRoom);
const charlie = new User("Charlie", chatRoom);

chatRoom.addUser(alice);
chatRoom.addUser(bob);
chatRoom.addUser(charlie);

alice.send("Hello Everyone!");

console.log("----------------");

bob.send("Hi Alice!");