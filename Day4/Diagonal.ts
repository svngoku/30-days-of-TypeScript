function DiagonalDifference(arr:Array<Array<number>>): number {
    let len:number = arr.length, diag1 = 0, diag2 = 0;
    let diag:number = arr.length - 1;
    for(let i = 0 ; i < len; i++) {
     diag1 += arr[i][i];
     diag2 += arr[i][diag];
     diag--;
    }
    return Math.abs(diag2 - diag1);
}
console.log(DiagonalDifference([[11, 2, 4], [4,5,6], [10,8,-12]]))