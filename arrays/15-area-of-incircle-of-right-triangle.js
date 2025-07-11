function calculateArea(p, b, h) {
  const pi = 3.14;

  return pi * (p + b - h) ** 2;
}

console.log(calculateArea(3, 4, 5));
