function print(n, i = 1) {
  if (i > n) return;
  console.log(i);
  i++;
  print(n, i);
}

print(10);
