function highestPalindrome(s, k) {
  let arr = s.split('');
  let n = arr.length;

  function makePalindrome(left, right, k) {
    if (left >= right) return k;

    if (arr[left] !== arr[right]) {
      let maxDigit = Math.max(arr[left], arr[right]);
      arr[left] = arr[right] = maxDigit;
      k--;
    }

    return makePalindrome(left + 1, right - 1, k);
  }

  function maxPalindrome(left, right, k) {
    if (left > right || k <= 0) return;

    if (arr[left] !== '9') {
      if (left === right && k > 0) {
        arr[left] = '9';
        k--;
      } else if (arr[left] !== s[left] && arr[right] !== s[right] && k >= 1) {
        arr[left] = arr[right] = '9';
        k -= 1;
      } else if (k >= 2) {
        arr[left] = arr[right] = '9';
        k -= 2;
      }
    }

    return maxPalindrome(left + 1, right - 1, k);
  }

  k = makePalindrome(0, n - 1, k);

  if (k < 0) return '-1';

  maxPalindrome(0, n - 1, k);

  return arr.join('');
}

console.log(highestPalindrome('3943', 1)); // Output: "3993"
console.log(highestPalindrome('932239', 2)); // Output: "992299"
console.log(highestPalindrome('4567', 3)); // Output: "9669"
