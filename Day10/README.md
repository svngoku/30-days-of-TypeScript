# Introduction aux Interfaces en TypeScript

TypeScript nous aide à conserver un contrat avec nos valeurs en nous permettant de définir une vérification de type fine. Les interfaces sont le mécanisme principal dans TypeScript pour accomplir cela.

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

Si nous essayons de définir des objets avec des propriétés manquantes, des propriétés supplémentaires ou des propriétés d’un type incorrect, le compilateur TypeScript se plaindra et nous dira exactement ce qui ne va pas avec notre définition d'une ```Voiture (Car)```

* NB: Nous pouvons définir une propriétée optionnelle dans notre interface avec l'opérateur ```Elvis``` (```?```)