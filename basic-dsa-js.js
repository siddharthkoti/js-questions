// Q => 1 Reverse a String
// function reverseString(str) {
// let newStr = "";
// for(let i = str.length - 1; i >= 0; i--){
// newStr += str[i]
// };
// return newStr;
// };

// console.log(reverseString("hello")); // Output: "olleh"

// Q => 2 Check if a String is a Palindrome
// function isPalindrome(str) {
// return str.split("").reverse().join("") === str;
// }

// console.log(isPalindrome("madam"));  // Output: true
// console.log(isPalindrome("hello"));  // Output: false

// Q => 3 Remove Duplicates from a String
// function removeDuplicates(str) {
// let newStr = "";
// for(const char of str){
// if(!newStr.includes(char)){
// newStr += char
// }
// }
// return newStr
// }

// console.log(removeDuplicates("hello")); // Output: "helo"
// console.log(removeDuplicates("aabbcc")); // Output: "abc"

// Q => 4 Find the First Non-Repeating Character
// function firstNonRepeatingChar(str) {
// let counterObj = {};
// for(const char of str){
// counterObj[char] = counterObj[char] ? counterObj[char] += 1 : counterObj[char] = 1;
// }
// for(const ele in counterObj){
//     if(counterObj[ele] === 1){
//         return ele
// }
// }
// return null
// }

// console.log(firstNonRepeatingChar("aabbccdde")); // Output: "e"
// console.log(firstNonRepeatingChar("hello")); // Output: "h"
// console.log(firstNonRepeatingChar("aabb")); // Output: null

// Q => 5 Count the Occurrences of Each Character
// function countCharacterOccurrences(str) {
// let ocuCountObj = {};
// for(const char of str){
// ocuCountObj[char] = ocuCountObj[char] ? ocuCountObj[char] += 1 : ocuCountObj[char] = 1;
// }
// return ocuCountObj
// }

// console.log(countCharacterOccurrences("hello"));
// // Output: { h: 1, e: 1, l: 2, o: 1 }
// console.log(countCharacterOccurrences("aabbcc"));
// // Output: { a: 2, b: 2, c: 2 }

// Q => 6 Reverse Words in a Sentence

// function reverseWords(sentence) {
//   let newStr = "";
//   let newSent = sentence.split(" ");
//   for (let i = newSent.length - 1; i >= 0; i--) {
//     newStr += `${newSent[i]} `
//   }
//   return newStr
// };

// console.log(reverseWords("Hello World"));
// Output: "World Hello"
// console.log(reverseWords("I love JavaScript"));
// Output: "JavaScript love I"

// 7. Check if Two Strings are Anagrams
// function areAnagrams(str1, str2) {
//   return str1.split("").sort().join("") === str2.split("").sort().join("")
// }

// console.log(areAnagrams("listen", "silent"));  // Output: true
// console.log(areAnagrams("hello", "world"));    // Output: false

// 8. Find the Longest Substring Without Repeating Characters
// function longestUniqueSubstring(str) {
//   let maxSubstring = ""; // Sabse lambi unique substring track karega

//   for (let i = 0; i < str.length; i++) {
//     let seenChars = new Set();
//     let tempSubstring = "";

//     for (let j = i; j < str.length; j++) {
//       if (seenChars.has(str[j])) break; // Duplicate mil gaya, stop karo

//       seenChars.add(str[j]);
//       tempSubstring += str[j];

//       if (tempSubstring.length > maxSubstring.length) {
//         maxSubstring = tempSubstring;
//       }
//     }
//   }

//   return maxSubstring;
// }

// console.log(longestUniqueSubstring("abcabcbb")); // Output: "abc"
// console.log(longestUniqueSubstring("bbbbb"));    // Output: "b"
// console.log(longestUniqueSubstring("pwwkew"));   // Output: "wke"

// 9. Convert a String to an Integer (atoi Implementation)

// 10. Compress a String (Run-Length Encoding)
// function compressString(str) {
//   if (!str) return ""; // Agar empty string ho, return empty string

//   let compressed = "";
//   let count = 1;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i + 1]) {
//       count++; // Same character aaya to count badhao
//     } else {
//       compressed += str[i] + count; // Character aur uska count add karo
//       count = 1; // Count reset karo
//     }
//   }

//   return compressed;
// }

// console.log(compressString("aabbcc")); // Output: "a2b2c2"
// console.log(compressString("aaabbbcccaaa")); // Output: "a3b3c3a3"
// console.log(compressString("abcd")); // Output: "a1b1c1d1"
// console.log(compressString("aaaabbbaaa")); // Output: "a4b3a3"

// // 11. Find the Most Frequent Character
// function mostFrequentChar(str) {
//   if (str.length === 0) return ""; // Edge case

//   let freqMap = {};
//   let maxFreq = 0;
//   let maxChar = "";

//   for (let char of str) {
//     freqMap[char] = (freqMap[char] || 0) + 1;

//     if (freqMap[char] > maxFreq) {
//       maxFreq = freqMap[char];
//       maxChar = char;
//     }
//   }

//   return maxChar;
// }

// console.log(mostFrequentChar("hello"));      // Output: "l"
// console.log(mostFrequentChar("aabbccc"));    // Output: "c"
// console.log(mostFrequentChar("abcde"));      // Output: "a" (or first occurring unique character)
// console.log(mostFrequentChar(""));           // Output: "" (empty string case)

// 12. Find All Substrings of a Given String ?
// function findAllSubstrings(str) {
//   let substrings = [];

//   for (let i = 0; i < str.length; i++) {
//     let temp = "";
//     for (let j = i; j < str.length; j++) {
//       temp += str[j]; // Character add karte jao
//       substrings.push(temp); // Result list mein store karo
//     }
//   }

//   return substrings;
// }

// console.log(findAllSubstrings("abc"));
// // Output: ["a", "ab", "abc", "b", "bc", "c"]

// console.log(findAllSubstrings("abcd"));
// // Output: ["a", "ab", "abc", "abcd", "b", "bc", "bcd", "c", "cd", "d"]
// 13. Check if a String is a Rotation of Another String
// function isRotation(str1, str2) {
//   if (str1.length !== str2.length) return false; // Length different? Not a rotation

//   return (str1 + str1).includes(str2); // Check if str2 is a substring of str1+str1
// }

// console.log(isRotation("waterbottle", "erbottlewat"));  // ✅ Output: true
// console.log(isRotation("hello", "lohel"));             // ✅ Output: true
// console.log(isRotation("hello", "olleh"));             // ❌ Output: false

// 14. Remove All White Spaces from a String

// 15. Check if a String is a Valid Shuffle of Two Strings
// function isValidShuffle(str1, str2, shuffled) {
//   if (str1.length + str2.length !== shuffled.length) return false; // Length mismatch

//   let i = 0, j = 0, k = 0;

//   while (k < shuffled.length) {
//     if (i < str1.length && str1[i] === shuffled[k]) {
//       i++;
//     } else if (j < str2.length && str2[j] === shuffled[k]) {
//       j++;
//     } else {
//       return false; // Agar koi character match nahi karta toh invalid shuffle
//     }
//     k++;
//   }

//   return i === str1.length && j === str2.length; // Dono strings complete hone chahiye
// }

// console.log(isValidShuffle("abc", "def", "dabecf"));  // ✅ Output: true
// console.log(isValidShuffle("abc", "def", "abdecf"));  // ❌ Output: false

// 16. Convert a String to Title Case
// function toTitleCase(str) {
// return str.split(" ").map((item) => item[0].toUpperCase() + item.slice(1)).join(" ")
// };

// console.log(toTitleCase("hello world"));
// // Output: "Hello World"

// 17. Find the Longest Common Prefix
// function longestCommonPrefix(arr) {
//   let prefix = arr[0];
//   for (const char of arr) {
//     while (!char.startsWith(prefix)) {
//       prefix = prefix.slice(0, -1);
//       if (prefix === "") return ""
//     }
//   }
//   return prefix;
// };

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// // Output: "fl"

// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// // Output: ""

// 18. Convert a String to a Character Array
// function stringToCharArray(str) {
//   return [...str]
// }

// console.log(stringToCharArray("hello"));
// // Output: ['h', 'e', 'l', 'l', 'o']

// 19. Replace Spaces with %20 (URL Encoding)
// function urlEncode(str) {
//   return str.replaceAll(" ", "%20");
// }

// console.log(urlEncode("Hello World"));  // ✅ Output: "Hello%20World"
// console.log(urlEncode("My name is Farhan"));  // ✅ Output: "My%20name%20is%20Farhan"

// 20. Convert a Sentence into an Acronym

// function toAcronym(sentence) {
//   return sentence
//     .split(" ")   // Words ko alag alag karna
//     .map(word => word[0].toUpperCase())  // Har word ka pehla letter uppercase lena
//     .join("");  // Sab letters ko join karna
// }

// console.log(toAcronym("JavaScript Object Notation"));  // ✅ Output: "JSON"
// console.log(toAcronym("Hyper Text Markup Language"));  // ✅ Output: "HTML"
// console.log(toAcronym("Cascading Style Sheets"));  // ✅ Output: "CSS"
// console.log(toAcronym("Farhan Faisal Developer"));  // ✅ Output: "FFD"

// 21. Check if a String Contains Only Digits
// function isNumeric(str) {
//   return !isNaN(str) && str.trim() !== "";
// }

// console.log(isNumeric("123456"));  // ✅ Output: true

// 22. Find the Number of Words in a String
// function wordCount(str) {
//   return str.split(" ").length
// };

// console.log(wordCount("Hello world, this is JavaScript!"));
// // Output: 5

// 23. Remove a Given Character from a String
// function removeCharacter(str, char) {
//   return str.split("").filter((ele) => ele !== char).join("")
// }

// console.log(removeCharacter("hello", "l"));
// Output: "heo"
// 24. Find the Shortest Word in a String
// function shortestWord(str) {
//   return str.split(" ").sort((a, b) => a.length - b.length)[0]
//   }

//   console.log(shortestWord("JavaScript is awesome"));
//   // Output: "is"

// 25. Find the Longest Palindromic Substring
// function longestPalindromicSubstring(str) {
//   if (!str || str.length === 0) return "";

//   let start = 0, maxLength = 0;

//   function expandAroundCenter(left, right) {
//     while (left >= 0 && right < str.length && str[left] === str[right]) {
//       left--;
//       right++;
//     }
//     return [left + 1, right - 1]; // Palindrome ke valid boundaries return karte hain
//   }

//   for (let i = 0; i < str.length; i++) {
//     let [left1, right1] = expandAroundCenter(i, i);      // Odd length palindrome
//     let [left2, right2] = expandAroundCenter(i, i + 1);  // Even length palindrome

//     if (right1 - left1 > maxLength) {
//       start = left1;
//       maxLength = right1 - left1;
//     }

//     if (right2 - left2 > maxLength) {
//       start = left2;
//       maxLength = right2 - left2;
//     }
//   }

//   return str.substring(start, start + maxLength + 1);
// }

// console.log(longestPalindromicSubstring("babad"));  // Output: "bab" or "aba"
// console.log(longestPalindromicSubstring("cbbd"));   // Output: "bb"
// console.log(longestPalindromicSubstring("a"));      // Output: "a"
// console.log(longestPalindromicSubstring("ac"));     // Output: "a" or "c"