// Composite Pattern composes objects into tree structures so that clients can treat individual objects and groups of objects uniformly.
class FileSystemComponent {
    show() {
        throw new Error('implement this error');
    }
}

class File extends FileSystemComponent {
    constructor(file) {
        super()
        this.file = file;
    }
    show() {
        console.log(`this is your file: ${this.file}`)
    }
}
class Directory extends FileSystemComponent {
    constructor(name) {
        super();
        this.name = name;
        this.children = [];
    }
    add(file) {
        this.children.push(file);
    }
    show() {
        console.log(this.name, "is current directory");
        for (let file of this.children) {
            file.show();
        }
    }
}

// A directory stores FileSystemComponent, not just files.
// That means it can store: File , Directory Both!

const file1 = new File("Resume.pdf");
const file2 = new File("Notes.txt");

const documents = new Directory("Documents");

documents.add(file1);
documents.add(file2);

const root = new Directory("Root");

root.add(documents);
root.add(new File("Photo.jpg"));

root.show();

// The client only calls:
// root.show();
// It doesn't care whether each child is a file or another directory.