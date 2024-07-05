function weightedStrings(s, queries) {
  const weights = new Set();
  let currentWeight = 0;
  let prevChar = '';

  for (const char of s) {
    const charWeight = char.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

    if (char === prevChar) {
      currentWeight += charWeight;
    } else {
      currentWeight = charWeight;
    }

    weights.add(currentWeight);
    prevChar = char;
  }

  return queries.map((query) => (weights.has(query) ? 'Yes' : 'No'));
}

// Contoh 1
const s1 = 'abbcccd';
const queries1 = [1, 3, 9, 8];
const result1 = weightedStrings(s1, queries1);
console.log(result1); // Output: ['Yes', 'Yes', 'Yes', 'No']

// Contoh 2
const s2 = 'xyz';
const queries2 = [24, 25, 26, 50];
const result2 = weightedStrings(s2, queries2);
console.log(result2); // Output: ['Yes', 'Yes', 'Yes', 'No']

// Contoh 3
const s3 = 'aaaabbbb';
const queries3 = [4, 8, 12, 16];
const result3 = weightedStrings(s3, queries3);
console.log(result3); // Output: ['Yes', 'Yes', 'No', 'No']
