# 30 days of TypeScript

## Qu'est ce que TypeScript

`Typescript` est un langage de programmation open-source développé et maintenu par Microsoft. Il s'agit d'un sur-ensemble (sucre syntaxique) strict de JavaScript, qui ajoute un typage statique optionnel au langage.

TypeScript est conçu pour le développement d'applications volumineuses et la transcompilation en JavaScript.Comme TypeScript est un sur-ensemble de JavaScript, les programmes JavaScript existants sont également des programmes TypeScript valides. TypeScript peut être utilisé pour développer des applications JavaScript pour l'exécution à la fois côté client et côté serveur (Node.js).

Il permet un typage statique optionnel des variables et des fonctions, la création de classes et d'interfaces, l'import de modules, tout en conservant l'approche non-contraignante de JavaScript. Il supporte la spécification ECMAScript 6.

TypeScript est un parfait allié pour les structures de données et la cohérence sur les données.

## Fonctionnalités

Le langage ajoute les fonctionnalités suivantes à ECMAScript 6 :

* Typage statique
* Typage générique
* Interfaces
* Classe, classe abstraite, expressions de classe
* Modules
* Mixin
* Enumérations
* Paramètres optionnels
* Unions
* Alias, alias de type générique
* Instruction
* Symboles
* Propriétés calculées
* Mots clés let, const et for … of

Depuis la version 1.6, la syntaxe JSX est supportée.

### Les types statique

Le langage permet de préciser le contenu d'une variable ou la valeur de retour d'une fonction (ou d'une méthode) :

```ts
// Creation d'une variable contenant un boolean
let isBoolean: boolean = false;

// Création d'une variable contenant une chaîne de caractère.
let message: string = "Hello World";

// Création d'une variable contenant un nombre.
let unity: number = 1;

// Création d'une fonction retournant une chaîne de caractère.
function returnString(): string {
    return "Ma valeur de retour";
}
```

### Type générique

Il est également possible de créer des types génériques. Pour une méthode :

```ts
function GenFunc<T>(param: T) {
    // content of func
}
```

Pour une classe

```ts
class GenClass<T> {
    genValue: T;
}

var GenInstance = new GenClass<String>();
GenInstance.genValue = 'Hello the world';

```

### Les énumérations

L'utilisation d'énumération dans du code TypeScript est offerte à travers le mot-clé enum.
Sans la définition de valeur à une constante :

```ts
enum Color { Red, White, Gray };
```

Il est à noter que, par défaut, la première constante de l'énumération aura pour valeur, 0.
Avec la définition de valeur :

```ts
enum Color { Red = 1, White = 3 , Blue = 2 };
```

## Ressources

- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/getting-started/)

- [Typescript lang](https://www.typescriptlang.org/docs/home.html)

- [TypeScript 3 Fundamentals, v2](https://frontendmasters.com/courses/typescript-v2/)