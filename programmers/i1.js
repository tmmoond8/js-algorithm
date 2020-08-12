function solution(plain) {
  for (var i = 0; i < plain.length - 1; i++) {
    if (plain[i] !== plain[plain.length - 1] ) {
      continue;
    }
    if (check(plain, i)) {
      break;
    }
  }
  return plain.length + i;
}

function check(str, startIndex) {
  const length = str.length;
  for (let i = startIndex+1, j = length - 2; i < j; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

console.log(solution('abab') === 5)
console.log(solution('abcde') === 9)