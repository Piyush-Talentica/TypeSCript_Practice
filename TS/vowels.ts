let count_vowel:string = 'Piyush'
let count=0
let vowel_set = new Set(['a', 'e', 'i', 'o', 'u'])
for(let i=0;i<count_vowel.length; i++)
{
    if(vowel_set.has(count_vowel[i].toLowerCase())){
        count++
    }
}
console.log(count)
