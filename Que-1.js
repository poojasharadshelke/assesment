 // Find duplicate and same values in two arrays

// Define the two arrays
var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

// Create a new array to store the duplicate and same values
var duplicates = [];

// Iterate over each element in the fullWordList array
for (var i = 0; i < fullWordList.length; i++) {
  var word = fullWordList[i];

  // Check if the word is present in the wordsToRemove array
  if (wordsToRemove.indexOf(word) !== -1) {
    // If the word is found, add it to the duplicates array
    duplicates.push(word);
  }
}

// Print the duplicate and same values
console.log('Duplicate and same values:', duplicates);

 // Find duplicate and same values in two arrays

// Define the two arrays
var fullWordList = ['1', '2', '3', '4', '5'];
var wordsToRemove = ['1', '2', '3'];

// Create a new array to store the duplicate and same values
var duplicates = [];

// Iterate over each element in the fullWordList array
for (var i = 0; i < fullWordList.length; i++) {
  var word = fullWordList[i];

  // Check if the word is present in the wordsToRemove array
  if (wordsToRemove.indexOf(word) !== -1) {
    // If the word is found, add it to the duplicates array
    duplicates.push(word);
  }
}

// Print the duplicate and same values
console.log('Duplicate and same values:', duplicates);

