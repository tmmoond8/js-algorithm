# reverse-integer

Given a 32-bit signed integer, reverse digits of an integer.

**Example 1:**

    Input:Output:

**Example 2:**

    Input:Output:

**Example 3:**

    Input:Output:

**Note:**Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231, 231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

### Solution

---

    var reverse = function(x) {
      var reversed = String(x).split('').reverse();
      if (reversed[reversed.length - 1] === '-') reversed.unshift(reversed.pop());
      var reversedInt = parseInt(reversed.join(''), 10);
      if (reversedInt < -1*2**31 || reversedInt >= 2**31) return 0;
      return reversedInt;
    };