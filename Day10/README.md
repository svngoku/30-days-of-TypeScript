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

Si nous tentons de de définir un objects avec des props manquantes, hg

* NB: Nous pouvons définir une propriétée optionnelle dans notre interface avec l'opérateur ```Elvis``` (```?```)