"use strict";
// code to remove duplicates from new array
var clear_set = new Set();
let unclear_arr = [1, 2, 3, 4, 5, 6, 1, 2, 4, 6, 7, 8, 9];
for (let i = 0; i < unclear_arr.length; i++) {
    clear_set.add(unclear_arr[i]);
}
// console.log(Array.from(clear_set))
const clear_array = Array.from(clear_set);
console.log(clear_array);
