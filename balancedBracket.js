function balancedBracket(s) {
  const stack = [];
  const bracketPairs = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    } else if (char === ')' || char === '}' || char === ']') {
      if (stack.pop() !== bracketPairs[char]) {
        return 'NO';
      }
    }
  }

  return stack.length === 0 ? 'YES' : 'NO';
}

console.log(balancedBracket('{ [ ( ) ] }'));
console.log(balancedBracket('{ [ ( ] ) }'));
console.log(balancedBracket('{ ( ( [ ] ) [ ] ) [ ] }'));
