import KeyValuePair from './Generic';  
import { IKeyValueProcessor , kvProcessor } from './IGeneric';

// KeyValuePair with types number & string
const sirMusk = new KeyValuePair<number, string>(1, "Elon MUSK");

// KeyValuePair with types string & string
const sirJobs = new KeyValuePair<string, string>("CEO", "Steve Jobs");

// KeyValueProcessor with inteface  IKeyValueProcessor
const sirBill: IKeyValueProcessor<number, string> = 
new kvProcessor();


sirMusk.display(); // Key: 1, value: Elon MUSK
sirJobs.display(); // Key: CEO, value: Steve Jobs    
console.log(sirBill.process(1, "Bill")); // { key: 1, value: 'Bill' }
