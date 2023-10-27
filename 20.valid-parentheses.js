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

  const mapping = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];

    if (mapping[currentChar]) {
      stack.push(mapping[currentChar]);
      
      continue;
    }
    
    if (stack.pop() !== s[i]) {
      return false;
    }
  }

  return !stack.length;
};
// @lc code=end

