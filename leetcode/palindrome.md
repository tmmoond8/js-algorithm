# palindrome

### Solution

```javascript
  var isPalindrome = (num) => {
    const numString = num.toString();
    for (let i = 0; i < Math.floor(numString.length / 2); i++) {
      if (numString[i] !== numString[numString.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
```

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

**Example 1:**

    Input: 121
    Output: true

**Example 2:**

    Input: -121
    Output: false
    Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

**Example 3:**

    Input: 10
    Output: false
    Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

**Follow up:**

Coud you solve it without converting the integer to a string?

Accepted

770,700

Submissions

1,667,677