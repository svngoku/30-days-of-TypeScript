// @ts-check
"use strict"

// define a animals type
type Animal = 'Cat' | 'Dog' | 'Alligator' | 'Dragon' | 'Gorilla';  

// assign the type Animal to animals
let animals : Animal; 

animals = 'Dog'; // ✔
animals = 'Dragon'; // ✔
animals = 'Alligator' // ✔

/* animals = 'Elephant';*/ // ✖ Type '"Elephant"' is not assignable to type 'Animal'.

console.log(animals)


