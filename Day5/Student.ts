import IStudent from './IStudent'


let students = [];

function createStudent(infos: IStudent): void {
    let { name , lastname , address , age, phone } = infos;
    let newStudent = infos;
    students.push(newStudent);
}

function getStudents(student): any  {
    return students;
}

let Student1 = createStudent({ name: 'STARK' , lastname: 'Tonny', address: '3 RUE NELSON' ,age: 45, phone: 8789065 });

console.log(getStudents(students));

