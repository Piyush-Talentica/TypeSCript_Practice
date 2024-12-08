"use strict";
function find_palindrome(pali_string) {
    pali_string = pali_string.toLowerCase();
    let start_ = 0;
    let end_ = pali_string.length - 1;
    while (start_ < end_) {
        if (pali_string[start_] != pali_string[end_]) {
            return false;
        }
        start_++;
        end_--;
    }
    return true;
}
console.log(find_palindrome("Piyush"));
console.log(find_palindrome("Naman"));
console.log(find_palindrome("N a m aN"));
