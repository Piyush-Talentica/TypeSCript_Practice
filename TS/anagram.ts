// Check for Anagrams
// Write a function to check if two strings are anagrams of each other.
// Example: Input: "listen", "silent" → Output: true

let word1 = 'listen'
let word2 = 'silent'

var final_verdict = true

// console.log(word1.split('').sort().join()===word2.split('').sort().join())

let char_dict:{[key:string]:number} = {}

for(let each of word1){
    char_dict[each] = (char_dict[each] || 0) + 1
}

for(let each of word2){
    if(!char_dict[each]){
        final_verdict = false
    }
    char_dict[each]--
}
if(final_verdict)
    console.log("ANAGRAM")
else
    console.log("NOT ANAGRAM")
