"use strict";
// String Compression
// Implement basic string compression using the counts of repeated characters.
// Example: Input: "aabcccccaaa" → Output: "a2b1c5a3"
let word_rep = "aabcccccaaa";
var final_string_s = '';
let current_count = 1;
let current_word = word_rep[0];
for (let i = 1; i < word_rep.length; i++) {
    if (current_word == word_rep[i]) {
        current_count++;
    }
    else {
        final_string_s = final_string_s + current_word + current_count;
        current_count = 1;
        current_word = word_rep[i];
    }
}
final_string_s = final_string_s + current_word + current_count;
console.log(final_string_s);
