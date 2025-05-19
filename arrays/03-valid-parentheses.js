// valid parantheses

var isValid = function (s) {
  const stack = [];
  const map = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of s) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    } else {
      if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};

console.log(isValid('()[]{}')); // true
console.log(isValid('([{}])')); // true
console.log(isValid('([)]')); // false
console.log(isValid('((()))')); // true
console.log(isValid('(()')); // false
