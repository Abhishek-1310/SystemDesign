// make all action command object
// now button don't know what happen it only knows command.execute don't know about bold italic all button just execute

// 1) command
class Command {
    execute() {
        throw new Error('implement this method');
    }
}
// 2) receiver 
class TextEditor {
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
// 3) concrete commands
class Bold extends Command {
    constructor(editor) {
        super();
        this.editor = editor;
    }

    execute() {
        this.editor.bold();
    }
}
class Italic extends Command {
    constructor(editor) {
        super();
        this.editor = editor;
    }

    execute() {
        this.editor.italic();
    }
}
class Underline extends Command {
    constructor(editor) {
        super();
        this.editor = editor;
    }

    execute() {
        this.editor.underline();
    }
}
// 4) invoker
class Button {
    constructor(command) {
        this.command = command;
    }

    click() {
        this.command.execute();
    }

}
// client
let editor = new TextEditor();
let bold = new Button(
    new Bold(editor)
)
let italic = new Button(
    new Italic(editor)
)
let under = new Button(
    new Underline(editor)
)

bold.click();
italic.click();
under.click();