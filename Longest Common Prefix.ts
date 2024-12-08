// Longest Common Prefix
// Write a function to find the longest common prefix string amongst an array of strings.
// Example: Input: ["flower", "flow", "flight"] → Output: "fl"

let input_arr_flower:string[] = ["flower", "flow", "flight"]

function find_common_largest_prefix(strings:string[]):string{
    if(strings.length==0) return ''
    let prefix = strings[0]
    for(let i=1;i<strings.length;i++)
    {
        while(!strings[i].startsWith(prefix)){
            prefix = prefix.slice(0,-1)
            if(prefix==='') return ''
        }
    }
    return prefix
}

console.log(find_common_largest_prefix(input_arr_flower))
