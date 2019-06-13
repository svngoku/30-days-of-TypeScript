import Person from "./Person";

export default class Employe extends Person {
    
    // Employe have a code
    protected code: number;

    // Constructor
    constructor(name: string, code: number) {
        super(name);
        this.code = code;
    }

    get Employe() {
        return `code : ${this.code}, name: ${this.name}`;
    }
    
    // find method , return a new employe by the name
    find(name: string) {
        // cn be a AJAX request to find an employee from a db
        return new Employe(name, 6);
    }
    
}