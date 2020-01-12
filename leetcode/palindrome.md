# palindrome

### Solution

---

    var isPalindrome = (num) => {
      const numString = num.toString();
      for (let i = 0; i < Math.floor(numString.length / 2); i++) {
        if (numString[i] !== numString[numString.length - 1 - i]) {
          return false;
        }
      }
      return true;
    }

Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

**Example 1:**

    Input:Output:

**Example 2:**

    Input:Output:Explanation:

**Example 3:**

    Input:Output:Explanation:

**Follow up:**

Coud you solve it without converting the integer to a string?

Accepted

770,700

Submissions

1,667,677