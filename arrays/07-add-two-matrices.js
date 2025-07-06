function add(A, B) {
  let n = A.length;
  let m = A[0].length;
  let C = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      C[i][j] = A[i][j] + B[i][j];
    }
  }

  return C;
}

const A = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
  [4, 4, 4],
];
const B = [
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
  [4, 4, 4],
];
console.log(add(A, B));
