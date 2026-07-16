class Iterator {
    hasNext() {
        throw new Error('Implement has next()');
    }
    next() {
        throw new Error('Implement next()');
    }
}

class StudentIterator extends Iterator {
    constructor(students) {
        super();
        this.students = students;
        this.index = 0;
    }
    hasNext() {
        return this.index < this.students.length;
    }
    next() {
        return this.students[this.index++];
    }
}

class StudentCollection {
    constructor() {
        this.student = [];
    }

    add(student) {
        this.student.push(student);
    }

    createIterator() {
        return new StudentIterator(this.student)
    }
}
// now client never get students it only get iterator

let students = new StudentCollection();
students.add('abhishek');
students.add('rahul');
students.add('ravi');
students.add('rohit');
let iterator = students.createIterator();

while (iterator.hasNext()) {
    console.log(iterator.next());
}

