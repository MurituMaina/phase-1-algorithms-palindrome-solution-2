function isPalindrome(word) {
  // Write your algorithm here
  const symbols = /[^a-zA-Z0-9]/g;
  // .replace(symbols,'')
  const lowerCase = word.toLowerCase();
  const stringReverse = lowerCase.split('').reverse().join('');
  return lowerCase === stringReverse;
}

/* 
  Add your pseudocode here
  Get the string reversed 
  check if the values match in reverse order by strict 
  comparison

*/

/*
  Add written explanation of your solution here
  we get the string convert it to lowercase
  split it up and reverse the order of the letters of the string
  compare the lowercased string with the reversed string. 
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
