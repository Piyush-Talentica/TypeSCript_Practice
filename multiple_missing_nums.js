"use strict";
// Find Missing Numbers in a Range
// Given an array of integers from 1 to n, with some missing numbers, find all missing numbers.
// Example: Input: [1, 2, 4, 6], n = 6 → Output: [3, 5]
let deciding_array = [1, 2, 4];
let deciding_set = new Set(deciding_array);
let final_missing_numbers = [];
for (let i = 1; i <= 6; i++) {
    if (!deciding_set.has(i))
        final_missing_numbers.push(i);
}
console.log(final_missing_numbers);
