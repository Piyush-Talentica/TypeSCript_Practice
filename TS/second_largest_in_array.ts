// Array Manipulation Problems
// Find the Second Largest Number
// Write a function that returns the second largest number in an array of integers.

let arr_:number[] = [1, 2, 3, 4, 11, 6, 7, 8, 9, 10]

let max_num = arr_[0]
let second_max_num = arr_[0]

for(let i=1; i<arr_.length; i++){
    if(max_num<arr_[i]){
        max_num = arr_[i]
    }
}

for(let i=0; i<arr_.length; i++){
    if(max_num>arr_[i] && second_max_num<arr_[i]){
        second_max_num = arr_[i]
    }
}

console.log(second_max_num)


// let arr_: number[] = [1, 2, 3, 4, 11, 6, 7, 8, 9, 10];

// let max_num = -Infinity;
// let second_max_num = -Infinity;

// for (let i = 0; i < arr_.length; i++) {
//     if (arr_[i] > max_num) {
//         second_max_num = max_num;
//         max_num = arr_[i];
//     } else if (arr_[i] > second_max_num && arr_[i] !== max_num) {
//         second_max_num = arr_[i];
//     }
// }

// console.log(second_max_num);
