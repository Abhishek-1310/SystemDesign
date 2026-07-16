class textEditor {
    bold() {
        console.log("TEXT IS BOLD");
    }
    italic() {
        console.log("text is italic");
    }
    underline() {
        console.log("text is underline.....");
    }
}

class Bold {
    constructor(editor) {
        this.editor = editor;
    }

    click() {
        this.editor.bold();
    }
}
class Italic {
    constructor(editor) {
        this.editor = editor;
    }

    click() {
        this.editor.italic();
    }
}
class Underline {
    constructor(editor) {
        this.editor = editor;
    }

    click() {
        this.editor.underline();
    }
}

let editor = new textEditor();
let bold = new Bold(editor);
let italic = new Italic(editor);
let under = new Underline(editor);

bold.click();
italic.click();
under.click();

// problem here is tomorrow u have to add undo you have to modify all class
// so much tight coupling

// instead of buttons calling the editor directly every action becomes a command object
// check good code