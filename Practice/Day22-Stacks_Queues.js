// Input: s = "(()())(())"
// Output: "()()()"
// Explanation:
// The input string is "(()())(())", with primitive decomposition "(()())" + "(())".
// After removing outer parentheses of each part, this is "()()" + "()" = "()()()".

function removeOutermostParentheses(s) {
  let stack = [];
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      // If opening bracket push in stack
      stack.push(i);
      if (stack.length > 1) {
        // If stack length is greater than 1, push into answer since we have to remove outermost bracket
        ans += s[i];
      }
    } else {
      if (stack.length > 1) {
        // Do the same when we encounter closing bracket
        ans += s[i];
      }
      stack.pop(); // pop from stack when closing bracket is encountered
    }
  }
  return ans;
}
