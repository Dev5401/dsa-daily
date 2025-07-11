// a number whose divisors sum up to the number itself

function checkPerfectNumber(num) {
  let sum = 0;
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

console.log(checkPerfectNumber(6));
