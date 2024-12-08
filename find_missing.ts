let n_missing:number[] = [1, 2, 3, 4, 5, 6, 8, 9]
let sum_missing_aaray:number = 0
let total_length_missing_arr = n_missing.length
for(let i=0;i<total_length_missing_arr;i++){
    sum_missing_aaray = sum_missing_aaray + n_missing[i]
}
let total_actual_sum = (total_length_missing_arr+1)*(total_length_missing_arr+2)*0.5
console.log(sum_missing_aaray)
console.log(total_actual_sum)
console.log(total_actual_sum-sum_missing_aaray)