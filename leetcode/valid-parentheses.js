var isValid = function(s) {
  var stack = [];
  var closeCouple = {
    ')': '(',
    ']': '[',
    '}': '{',
  }
  for (var i = 0; i < s.length; i++) {
    if (closeCouple.hasOwnProperty(s[i])) {
      if (closeCouple[s[i]] !== stack.pop()) return false
    } else {
      stack.push(s[i]);
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

console.log(isValid('()') === true);
console.log(isValid('()[]{}') === true);
console.log(isValid('(]') === false);
console.log(isValid('([)])') === false);
console.log(isValid('{[]}') === true);