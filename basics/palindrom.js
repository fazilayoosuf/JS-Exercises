function myPalindrom(word) {
  for (var i = 0; i <= word.length - 1; i++) {
    var lastLetter = word[word.length - (i + 1)];
    var firstletter = word[i];
    if (lastLetter != firstletter) {
      console.log(`${word} is not polindrom`);
      return;
    }
  }
  console.log(`${word} is polindrom`);
}
myPalindrom("refer");
function checkPalindrome(str) {
  // find the length of a string
  const len = string.length;
  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}
// take input
const string = "refer";
// call the function
const value = checkPalindrome(string);
console.log(value);
