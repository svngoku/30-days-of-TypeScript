# Introduction aux Interfaces en TypeScript

TypeScript helps us keep a contract with our vales by allowing us to define fine-grained type checking for them. Interfaces is the primary mechanism in TypeScript to accomplish that.

## Example of an interface

Définisson une interface ```Car``` avec différentes propriétés .

```ts
interface Car {
    serialNumber: string || number ;
    doors: number;
    color: string;
    model: string;
    picture?: string
}

```

Si nous tentons de de définir un objects avec des props manquantes, hg

* NB: Nous pouvons définir une propriétée optionnelle dans notre interface avec l'opérateur ```Elvis``` (```?```)