function intersectSets(setA: Set<number> , setB: Set<number>) {
    let intersection = new Set();
    for(let element of setB) {
        if (setA.has(element)) {
            intersection.add(element);
        }
        return intersection;
    }
}


let setA: Set<number> = new Set([1,2,3,4]);
let setB: Set<number> = new Set([2,3]);


console.log(intersectSets(setA, setB));