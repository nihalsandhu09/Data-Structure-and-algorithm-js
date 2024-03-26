/**Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
 

Constraints:

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s. */

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(/\s+/);

    // Helper function to reverse a portion of the array between two indices
    function reverse(start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    // Reverse the entire array
    reverse(0, arr.length - 1);

    // Join the array back into a string and return
    return arr.join(' ').trim();
};


// withouy regular expression 
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

let words = [] ; 
let start = 0;
let end = 0;
// iterate through the string to extract words 
while(start < s.length) { 
while(start < s.length && s[start] === ' '){
start++;
}
end = start;
while(end < s.length && s[end] !== ' '){
    end++;
}
// extract the word and insert it at the beginning of the array 
if(start !==  end){
    words.unshift(s.substring(start, end))
}
start = end;
};
return words.join(' ')
}