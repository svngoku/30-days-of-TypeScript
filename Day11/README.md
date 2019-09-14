# Les Génériques en profondeurs ( Generic in Deep)

Les génériques nous donne la possibilité de manipuler nos fonctions / nos classes avec des types différents.

La déclration d'un object de type générique est respecter en complétant l'object ( classe , function , interface) par un paramètre de type entre chevrons.

## Exemple 1

```typescript
function tab<T>(a:T , b:T) : T[] {
    let t = new Array<T>();
    t.push(a);
    t.push(b);

    return t;
}

console.log(tab<string>("Generic ", "type")); // ✔
console.log(tab<number>(10, 20)); // ✔
console.log(tab<boolean>("true", false)); // ✖
```

## Contraintes

L'emploi des types générique peut etre problématique à partir du moment où l'on a besoin d'accéder à des champs sur ce type.

```typescript
    class Chronometre<T> {
        private compteur: T;
        constructor(compteur: T) {
            this.compteur = compteur;
        }

        value(): T {
            return this.compteur + 1; // Operator '+' cannot be applied to types 'T' and '1'.
        }
    }
```

Dans ce cas, il n'est pas possible car `compteur + 1` signifie que le type doit toujours supporter cette opération , ce qui est impossible pour un type générique.
Pour nous en sortir, nous devons demander à avoir une fonction `incrémenter` associé au type *T*. ( voir fichier ).
La création d'une interface générique se charge d'augmenter la valeur de notre compteur .
