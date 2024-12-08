let target = 5
let arr:number[] = [1,2,3,4,5,6]
// find pair
let _ = new Set<number>();
for(let i=0; i<arr.length; i++)
{
    if(_.has(target-arr[i]))
    {
        console.log('Numbers are '+arr[i]+' and '+ (target-arr[i]))
    }
    else{
        _.add(arr[i])
    }
}