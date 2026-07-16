// text editor

class TextEditor {
    constructor() {
        this.text = '';
    }

    write(val) {
        this.text += " " + val;
    }

    read() {
        console.log(this.text);
    }
}

let text2 = new TextEditor();
text1.write("hello");
text1.write("world");
text1.read();


// what u can do is with help of previous variable we will store that previous text but we can only do one time undo

// what if we need to do undo as many times i want :- sol :- we will use stack (history) push all the value when we want to do undo we will pop 

class TextEditor {
    constructor() {
        this.text = '';
        this.history = [];
    }

    write(val) {
        this.text += " " + val;
        this.history.push(this.text);
    }

    read() {
        console.log(this.history[this.history.length - 1]);
    }

    undo() {
        this.history.pop();
    }
}

let text1 = new TextEditor();
text1.write("hello");
text1.write("world");
text1.write("Abhishek");
text1.read();
text1.undo();
text1.read();
text1.undo();
text1.read();

// now problem is who owns this stack history from ouside also it can call and add in stack it will distroy state
// but we can make history private but if we will do one simple textEditor class doing everything editing, storing , printing

// momento :-design pattern :- we are spreading responsibility and protecting the internal state structure

//after momento pattern :- we have 1) textEditor class(only edit and restore text)
//                                  2) memento class (repersent a snapshot)
//                                  3) History class (Store snapshots) // state managment
//:- now it follow single responsibility principle 