// 10. Find the Longest Word
// Write a function that takes a sentence and returns the longest word in that sentence.

var sentence = "A quick brown fox jumps over the lazy dog"
let max = -1
var sentence_arr:string[] = sentence.split(' ')
let max_word = ''
for(let each of sentence_arr){
    if(max<each.length){
        max=each.length
        max_word=each
    }
}
console.log("word is "+max_word+" and the length is "+max)
