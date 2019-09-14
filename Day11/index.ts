class Team<T> {
    matricule : T;
    name: String;
    contrie: String;
    
    constructor(matricule: T) {
        this.matricule = matricule;
    }

    setName(name: String): void {
        this.name = name;
    }

    setContrie(contrie: String): void {
        this.contrie = contrie;
    }
}


const GoldenStateWarrior: Team<Number> = new Team<Number>(3)
GoldenStateWarrior.setName("Golden State Warrior");
GoldenStateWarrior.setContrie("USA");

console.log(GoldenStateWarrior);