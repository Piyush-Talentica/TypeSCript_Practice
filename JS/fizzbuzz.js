"use strict";
// 4. FizzBuzz
// Write a function that prints numbers from 1 to 100. 
// For multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". 
// For numbers that are multiples of both 3 and 5, print "FizzBuzz".
let fizzbuzznumber = 100;
for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
}
