"use strict";
function flattenArray(arr) {
    let result = [];
    for (let element of arr) {
        if (Array.isArray(element)) {
            // If the element is an array, recursively flatten it
            result = result.concat(flattenArray(element));
        }
        else {
            // If the element is not an array, add it to the result
            result.push(element);
        }
    }
    return result;
}
let nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
console.log(flattenArray(nestedArray));
// Output: [1, 2, 3, 4, 5, 6, 7, 8]
////// BELOW ONLY WORKS IN es2019 or later ///////
// // let nestedArray = [1, [2, [3, 4], 5], [6, 7], 8];
// console.log(nestedArray.flat(2)); 
// // Output: [1, 2, 3, 4, 5, 6, 7, 8]
