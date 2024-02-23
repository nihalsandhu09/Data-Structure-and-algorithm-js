/**Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character. */


// brute force worst solution ; 
// in brute force or in worst solution we can approach this solution ? becuase we want data of array  in reverse order we can read the array in reverse order and one by one store that data in a new array 

// var reverseString = function(s){

// let n = s.length;
// let ans = [];

// for(let i =0;i<=n-1;i++){
//     ans.push(s[i])
// }
// return ans;
// }

//  const output = reverseString(["h","e","l","l","o"])
//  console.log(output)


//  optimize solution 

// in brute force solution we are taking extra space of memory because of the array we can avoid it 
// this is wherw Two Pointer approach comes in picture 
// we can preapare two variables i,j  i to the startin of array and j to the last element of array 
// we can swap variables  i becomes j  and i++ , j-- 
// the time i and j cross each other the moment this whole array is reversed 


// https://leetcode.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let n = s.length;
    let i = 0;
    let j = n-1;
    while(i <= j) {
        // swapping the values
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;

        // move to the next positions
        i++;
        j--;
    }
};

