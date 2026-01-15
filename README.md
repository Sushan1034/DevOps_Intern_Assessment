# DevOps_Intern_Assessment

# Valid Anagram Checker (JavaScript)

## Problem Description

A **valid anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, using all original letters exactly once.  

This program checks whether two words entered by the user are **anagrams** of each other. The program continues to prompt for input until the user decides to exit.

### Examples

Input: "listen", "silent"
Output: True  - The words are anagrams

Input: "rat", "car"
Output: False  - The words are not anagrams


## Approach / Logic

1. **Check lengths**:  
   - If the two words do not have the same length, they **cannot be anagrams**.

2. **Count letters of the first word**:  
   - Loop through each character of the first word.  
   - Use a **frequency map** (JavaScript object) to count the occurrences of each character.

3. **Subtract letters using the second word**:  
   - Loop through each character of the second word.  
   - Decrease the corresponding count in the frequency map.  
   - If a character is missing or the count goes below zero, the words are **not anagrams**.

4. **Check the result**:  
   - If all counts match (no negative or leftover counts), the words are anagrams.

5. **Loop for user input**:  
   - The program uses a recursive input loop.  
   - Entering `1` as the first word will exit the program.

---

## Time and Space Complexity

## Time Complexity:
Let n be the length of the input strings.

Counting letters in the first string → O(n)

Checking letters in the second string → O(n)

Overall Time Complexity:

O(n) + O(n) = O(n)

The program scales linearly with the length of the input strings.

## Space Complexity:

A JavaScript object (count) is used to store the frequency of characters in the first string.

In the worst case (all unique characters), it stores n entries → O(n)

Optimization (for lowercase English letters a-z only):

Use a fixed-size array of length 26 to store letter counts.

This reduces space usage to O(1) (constant space), independent of input size.

Time Complexity -> O(n)
Space Complexity -> O(n) (or O(1) if only lowercase letters)
