function isPalindrome(word) {
  // Initialize pointers
  let start = 0;
  let end = word.length - 1;

  // Loop until start pointer is less than end pointer
  while (start < end) {
    // If characters at start and end are not equal, it's not a palindrome
    if (word[start] !== word[end]) {
      return false;
    }

    // Move pointers
    start++;
    end--;
  }

  // If the loop completes, the word is a palindrome
  return true;
}

/* 
  Written Explanation:
  The function uses two pointers, one starting from the beginning of the word and the other from the end.
  It compares characters at these pointers and moves them towards each other until they meet in the middle.
  If, at any point, the characters are not equal, the word is not a palindrome. Otherwise, it is.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Add your own custom tests here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

