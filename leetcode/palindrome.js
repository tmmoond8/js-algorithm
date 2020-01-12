var isPalindrome = (num) => {
  const numString = num.toString();
  for (let i = 0; i < Math.floor(numString.length / 2); i++) {
    if (numString[i] !== numString[numString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(palindrome(151) === true)
console.log(palindrome(1512) === false)