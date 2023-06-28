 // Find the longest chain of letters in a word

// Define the word
const word = '00000111110101001111100001001';

// Initialize variables to track the current chain and the longest chain
let currentChain = 0;
let longestChain = 0;

// Iterate over each character in the word
for (let i = 0; i < word.length; i++) {
  // Check if the current character is a letter ('1')
  if (word[i] === '1') {
    // Increment the current chain length
    currentChain++;

    // Check if the current chain is longer than the longest chain
    if (currentChain > longestChain) {
      longestChain = currentChain;
    }
  } else {
    // Reset the current chain length when encountering a non-letter ('0')
    currentChain = 0;
  }
}

// Print the longest chain of letters
console.log('Longest chain of letters:', longestChain); 
