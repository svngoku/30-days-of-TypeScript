// @ts-check
import Person from "./types/Person";
import ISalaried from './interfaces/ISalaried';

// basic list type base on array of Generic's
type ListType<T> = T[]; 

interface Employe extends Person, ISalaried {
    firstName: String;
    lastName: String;
}

class User implements Employe {
    public firstName: String;
    public lastName: String;
    public salary: Number;
    static users : ListType<User>;

    constructor(
        name: String, 
        lastname: String, 
        salair: Number
    ) {
        this.firstName = name;
        this.lastName = lastname;
        this.salary = salair;
    }
}

const Nelson = new User("Nelson", "Mandela",4000);


console.log(JSON.stringify(Nelson));
