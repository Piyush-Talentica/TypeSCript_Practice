// Find All Pairs with a Given Sum
// Write a function that finds all pairs of integers in an array whose sum is equal to a given target.
// Example: Input: [1, 2, 3, 4, 5], target = 6 → Output: [[1, 5], [2, 4]]

let finder_set = new Set<number>();
let Input_arr = [1, 2, 3, 4, 5]
let target_ = 6

let final_arr:number[][] = []

for(let i=0;i<Input_arr.length; i++){
    if(finder_set.has(target_-Input_arr[i])){
        let imdt_arr:number[] = [target_-Input_arr[i], Input_arr[i]]
        final_arr.push(imdt_arr)
    }
    else{
        finder_set.add(Input_arr[i])
    }
}

console.log(final_arr)

