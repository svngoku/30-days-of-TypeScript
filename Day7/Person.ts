
export default abstract class Person {
    name: string

    constructor(name: string) {
        this.name = name;
    }
    // display data in json format 
    display() {
        return {
            name: this.name
        }
    }

    abstract find(name: string): Person;
}

