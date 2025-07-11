function identicalMatrices(mat1, mat2) {
  if (mat1.length !== mat2.length || mat1[0].length !== mat2[0].length)
    return false;

  for (let i = 0; i < mat1.length; i++) {
    for (let j = 0; j < mat1[0].length; j++) {
      if (mat1[i][j] !== mat2[i][j]) return false;
      j++;
    }
  }

  return true;
}

console.log(
  identicalMatrices(
    [
      [1, 1, 0],
      [2, 2, 2],
      [1, 2, 3],
    ],
    [
      [1, 1, 1],
      [2, 2, 2],
      [1, 2, 3],
    ]
  )
);
