import Person from "./Person";
import Employe from "./Employe";

const employe: Person = new Employe("George", 100);
const contractor: Person = employe.find('Steve');

// show the name of the employe
console.log(employe); // { name: 'George' }
// find steve employe by George employe
console.log(contractor); // { name: 'Steve', code: 6 }


