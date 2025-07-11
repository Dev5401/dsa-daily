function sum(n, i = 1, s = 0) {
  if (i > n) return s;
  if (checkPrime(i)) s += i;
  return sum(n, i + 1, s);
}

function checkPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

console.log(sum(10));
