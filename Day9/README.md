# String Literal Types in TypeScript

Dans TypeScript, les types de chaîne littéral, nous permettent de définir des types qui acceptent uniquement une chaîne littéral défini.
Ils sont utiles pour limiter les valeurs de chaîne possibles des variables.

```ts
let animal: 'cat';

animal = 'cat'; // Ok
animal = 'dog'; // Compiler error
```