// Merge Two Sorted Arrays
// Merge two sorted arrays into one sorted array without using extra space.
// Example: [1, 3, 5] and [2, 4, 6] → Output: [1, 2, 3, 4, 5, 6]

let arr_1 = [1, 3, 5]
let arr_2 = [2, 4, 6]

let len_1 = arr_1.length
let len_2 = arr_2.length

// for(let i=0; i<len_2; i++){
//     arr_1.push(arr_2[i])
// }
// console.log(arr_1.sort())

let final_sorted_arr:number[] = []

let pointer_1 = 0
let pointer_2 = 0


while(pointer_1<len_1 && pointer_2<len_2){
    if(arr_1[pointer_1] < arr_2[pointer_2])
    {
        final_sorted_arr.push(arr_1[pointer_1])
        pointer_1++
    }
    else if(arr_1[pointer_1] >= arr_2[pointer_2]){
        final_sorted_arr.push(arr_2[pointer_2])
        pointer_2++
    }
}
while(pointer_2<len_2){
    final_sorted_arr.push(arr_2[pointer_2])
    pointer_2++
}
while(pointer_1<len_1){
    final_sorted_arr.push(arr_1[pointer_1])
    pointer_1++
    }

console.log(final_sorted_arr)
