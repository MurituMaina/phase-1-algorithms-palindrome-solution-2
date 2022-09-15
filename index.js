function isPalindrome(word) {
  // Write your algorithm here

  for (let i = 0; i < word.length / 2; i++) {
   return word[word.length-1-i] === word[i]
  }

}

/* 
  Add your pseudocode here
 iterate over the word and get value of index i
 compare the value of index i (at begining or 0 and increase to the centre)
compared with the value of letter at index of whole word-1-i
which is the index of the current letter.
*/

/*
  Add written explanation of your solution here
 get the value at index i and compare it with the value at index i from the end 
 by getting the subtraction of the length -1 and the value of i.
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
