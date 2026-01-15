const readline = require('readline');

// Create interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to check if two strings are anagrams
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const count = {};

    for (let char of s) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of t) {
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}

// Recursive function to ask for input repeatedly
function askWords() {
    rl.question("Enter the first word (or 1 to exit): ", function(word1) {
        if (word1 === "1") {
            console.log("Exiting... ");
            rl.close();
            return;
        }
        rl.question("Enter the second word: ", function(word2) {
            if (isAnagram(word1, word2)) {
                console.log("True  - The words are anagrams.\n");
            } else {
                console.log("False  - The words are not anagrams.\n");
            }
            // Call again to continue the loop
            askWords();
        });
    });
}

// Start the loop
askWords();
