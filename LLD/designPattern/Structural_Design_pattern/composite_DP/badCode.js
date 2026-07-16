class File {
    constructor(file) {
        this.file = file;
    }
    show() {
        console.log(`this is your file ${this.file}`)
    }
}

class Directory {
    constructor(name) {
        this.name = name;
        this.files = [];
    }
    put(file) {
        this.files.push(file);
    }
}

// Client:

const file1 = new File("Resume.pdf");
const dir = new Directory("Documents");
dir.add(file1);

// Now how do we display everything?
// file1.show();
// works. But dir.show(); doesn't exist.
// You now need separate logic.