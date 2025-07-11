function memoized(fn) {
  let cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    console.log(cache);

    if (cache[key]) {
      console.log('Fetching from cache for:', key);
      return cache[key];
    }

    console.log('Calculating result for:', key);
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function slowAdd(a, b) {
  for (let i = 0; i < 1e8; i++) {}
  return a + b;
}

const memoAdd = memoized(slowAdd);

console.log(memoAdd(3, 4));
