Components:

// Originator: The object whose state needs to be saved and restored.

// Memento: Captures and stores the internal state of the originator.

// Caretaker: Manages and stores the mementos, without modifying them.


// Memento
class Memento {
    constructor(text) {
        this.text = text;
    }
    getText() {
        return this.text;
    }
}
// Caretaker
class History {
    #history = [];
    constructor() {
        this.history = [];
    }
    add(memento) {
        this.#history.push(memento);
    }
    undo() {
        if (this.#history.length <= 1) {
            return null;
        }
        this.#history.pop();
        return this.#history[this.#history.length - 1];
    }
}
// Originator
class TextEditor {
    constructor() {
        this.text = ""
    }
    write(str) {
        this.text += " " + str;
    }
    createMemento() {
        return new Memento(this.text);
    }
    restore(memento) {
        if (memento) {
            this.text = memento.getText();
        }
    }
    show() {
        console.log(this.text);
    }
}

const editor = new TextEditor();
const history = new History();

history.add(editor.createMemento());

editor.write("Hello");
history.add(editor.createMemento());

editor.write("world");
history.add(editor.createMemento());

editor.write("!!!");
history.add(editor.createMemento());
editor.show();

// undo
editor.restore(history.undo());
editor.show();
// undo
editor.restore(history.undo());
editor.show();


