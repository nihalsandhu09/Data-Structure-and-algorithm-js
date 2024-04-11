/**367. Valid Perfect Square
Easy
Topics
Companies

Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

 

Example 1:

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.

Example 2:

Input: num = 14
Output: false
Explanation: We return false because 3.742 * 3.742 = 14 and 3.742 is not an integer.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if(num === 1 ) return true ; 
  
    let left = 1;
    let right = Math.floor(num / 2); // we will take right as half becuase we know that the square root will be less than or equal to half of the number 
    while(left <= right){
      let mid = left + Math.floor((right  - left) / 2);
      let square = mid* mid;
  
      if(square === num){
          return true;
      }else if (square < num){
          left = mid+ 1;
      }else{
          right = mid - 1 ;
      }
    }
    return false;
  };