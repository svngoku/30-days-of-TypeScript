import { Sport } from './Sport';
import { Transport } from './Transport';
import { Courses } from './Courses'

// destructures object 
// Courses fields
let { chimie , maths , programmation } = Courses;

// Transport fields
let { train, bike, car , bus  } = Transport;

// Sport fields

let { basketball , soccer, football } = Sport;




console.log(JSON.stringify({
    Courses ,
    Transport,
    Sport
}))