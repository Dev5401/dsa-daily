// a number whose digits are in the non decreasing order

function isTidy(n) {
  let prev = 10;

  while (n !== 0) {
    let rem = n % 10;
    n = Math.floor(n / 10);
    if (prev < rem) return false;
    prev = rem;
  }

  return true;
}

console.log(isTidy(12399));
