function DiagonalDifference(arr) {
    let len = arr.length, diag1 = 0, diag2 = 0;
    for (let i = 0; i < len; i++) {
        diag1 += arr[i][i];
        diag2 += arr[i][arr.length - 1 - i];
    }
    console.log(`> La somme de la première diagonal est ${diag1} \n> la deuxième diagonal : ${diag2} 
    `, `\n>La différence est égal à ${Math.abs(diag1 - diag2)}`);
}
console.log(DiagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));
