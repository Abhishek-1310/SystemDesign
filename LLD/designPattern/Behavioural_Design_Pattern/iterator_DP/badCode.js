// you have student collection and student known by client this is problem

class StudentCollection {
    constructor() {
        this.student = [];
    }

    add(student) {
        this.student.push(student);
    }
}

let stud = new StudentCollection();

stud.add('abhishek');
stud.add('rahul');
stud.add('ravi');
stud.add('rohit');

for (let i = 0; i < stud.student.length; i++) {
    console.log(stud.student[i]);
}
// problem when collection class tomorrow change use linked list and object this arr logic fail in client
// for (let st of stud.student) {
//     console.log(st);
// }

// client know students now tomorrow when instead of [] you want to use object or linked list client break
// every client need to change

// instead of exposing students give the client an iterator client only ask next