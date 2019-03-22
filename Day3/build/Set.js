/* La methode intersectSets affiche les éléments identique entre deux sets */
function intersectSets(a, b) {
    var intersection = new Set();
    for (var element of b) {
        if (a.has(element)) {
            intersection.add(element);
        }
        return intersection;
    }
}
let setA = new Set([1, 2, 3, 4]), setB = new Set([2, 3]);
console.log(intersectSets(setA, setB));