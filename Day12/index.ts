/**
 * @param { [number] } arr
 * @returns { number }
 * Get the first element of the array if we have an array.
 * Otherwise return undefined.
 * 
 * // equivalent to
    //   return (arr === null || arr === undefined) ?
    //       undefined :
    //       arr[0];
 */
function tryGetFirstElement<T>(arr?: T[]) {
    if(Array.isArray(arr)) {
        var result = (arr === null || arr === undefined) ? undefined : arr[0];
    }
    return result;
}
const log = console.log


log(tryGetFirstElement([1, 3, 4 ,6]))