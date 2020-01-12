/* La methode intersectSets affiche les éléments identique entre deux sets */
function intersectSets(a: Set<number> , b: Set<number>) : Set<number> {
    var intersection: Set<number> = new Set();
    for(var element of b) {
        if (a.has(element)) {
            intersection.add(element);
        }
        return intersection;
    }
}

let setA: Set<number> = new Set([1,2,3,4]), setB: Set<number> = new Set([2,3]);

console.log(intersectSets(setA, setB));