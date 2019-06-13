# Generic TypeScript

TypeScript supporte les classes génériques. Le paramètre de type générique est spécifié entre crochets après le nom de la classe. Une classe générique peut avoir des champs génériques (variables membres) ou des méthodes.

## Exemple

Dans l'exemple ci-dessus, nous avons créé une classe générique nommée KeyValuePair avec une variable de type entre les chevrons .
La classe KeyValuePair comprend deux variables de membre génériques privées et une fonction générique setKeyValue qui prend deux arguments d'entrée de type T et U.
Cela nous permet de créer un objet de ```KeyValuePair``` avec tout type de clé et de valeur .