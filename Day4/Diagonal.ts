function DiagonalDifference(arr:Array<Array<number>>): number {
    let len:number = arr.length;
    let diag:number = arr.length - 1;
    console.log(arr);
    for(let i = 0 ; i < len; i++) {
     var diag1: number = arr[i][i];
     var diag2: number = arr[i][diag];
     console.log(diag1, diag2);
     diag--;
    }
    return Math.abs(diag1 - diag2);
  }
  console.log(DiagonalDifference([[11, 2, 4], [4,5,6], [10,8,-12]]))