// a number whose cubes of digits sum up to the number itself

function checkArmStrongNumber(num) {
  return (
    String(num)
      .split('')
      .reduce((prev, curr) => prev + Number(curr) ** 3, 0) === num
  );
}

console.log(checkArmStrongNumber(153));
