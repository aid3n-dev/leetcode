/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(')');
    } else if (s[i] === '{') {
      stack.push('}');
    } else if (s[i] === '[') {
      stack.push(']');
    } else if (stack.pop() !== s[i]) {
      return false;
    }
  }

  return !stack.length;
};
// @lc code=end

