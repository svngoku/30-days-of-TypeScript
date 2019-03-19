function intersectSets(setA, setB) {
    let intersection = new Set();
    for (let element of setB) {
        if (setA.has(element)) {
            intersection.add(element);
        }
        return intersection;
    }
}
let setA = new Set([1, 2, 3, 4]);
let setB = new Set([2, 3]);
console.log(intersectSets(setA, setB));
