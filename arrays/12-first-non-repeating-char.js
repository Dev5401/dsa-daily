function firstNonRepeatingChar(str) {
  const arr = str.replace(/\s/g, '').split('');
  const obj = {};

  for (let element of arr) {
    obj[element] = (obj[element] || 0) + 1;
  }

  for (let key in obj) {
    if (obj[key] === 1) return console.log(key);
  }
}

firstNonRepeatingChar('subham mishra');

// str.trim() - remove leading and trailing spaces;
// str.trimStart() - remove leading space;
// str.trimEnd() - remove trailing space.
