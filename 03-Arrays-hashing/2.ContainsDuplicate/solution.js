/**Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109 */


// using brute force solution 
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let n = nums.length;
//   nums.sort((a,b)=> a-b)
    if(nums.length === 2){
    return nums[0] === nums[1];
  }


 for(let i=0; i<nums.length-1; i++){
    for(let j=i+1; j<nums.length; j++){
      if(nums[i] === nums[j]){
        return true;
      }
    }
  }
  return false;





};

console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,1]))
console.log(containsDuplicate([1,2,3,1]))




// using hashing 


var containsDuplicate = function(nums) { 
     
        


   
         let seen = new Map();
         for (let num of nums) {
             if (seen.has(num)) {
                 return true; // Duplicate found
             }
             seen.set(num, true);
         }
         return false; 
    
        
     
 
     
 
 
     
}