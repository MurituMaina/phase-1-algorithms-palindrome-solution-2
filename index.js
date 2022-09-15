function isPalindrome(word) {
  // Write your algorithm here
  const symbols = /[^a-zA-Z0-9]/g;
  const lowerCase = word.toLowerCase().replace(symbols,'');
  const stringReverse = lowerCase.split('').reverse().join('');
  return lowerCase === stringReverse;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
