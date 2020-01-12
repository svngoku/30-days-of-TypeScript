class ChronometreWithContrainte<T> {
    private compteur: T;
    constructor(compteur: T) {
        this.compteur = compteur;
    }

    // value(): T {
    //     return this.compteur + 1; // Operator '+' cannot be applied to types 'T' and '1'.
    // }
}

interface Incrementable {
    incrementer(): number;
}

class Chronometre<T extends Incrementable> {
    private compteur: T;
    constructor(compteur: T) {
        this.compteur = compteur;
    }

    value(): number {
        return this.compteur.incrementer();
    }
}

class CompteurEntier implements Incrementable {
    compte: number = 0;

    incrementer(): number {
        this.compte++;
        return this.compte;
    }
}

let chrono : 
    Chronometre<CompteurEntier> = 
    new Chronometre<CompteurEntier>(new CompteurEntier())  


console.log(chrono.value()) // 1
console.log(chrono.value()) // 2