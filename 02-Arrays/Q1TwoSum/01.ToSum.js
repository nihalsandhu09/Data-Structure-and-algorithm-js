// https://leetcode.com/problems/two-sum/description/
// Leetcode Problem No 1 >> TwoSum 

/** Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

/** Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1] */


// what approach should we follow to solve this Problem 
// lets first understand what is the question 
// we have an array on n numbers we have to return a pair of array from this array that sum is equalll to given target 

// nums = [2,7,11,15]  target = 9 
// why not we make evry possible pair like > (2,7) (2,11) (2,15) (7,11) (7,15) , (11,15)
// we have to return pair that addition is equall to given target 
// brute force solution 

// function twosum(nums , taregt){
 
//     let n = nums.length
//   for(let i =0; i<n-2;i++){
//     for(let j = i+1;j<n;j++){
//         if(nums[i] +nums[j] === taregt){
//             return [i,j]
//         }
//     }
//   }

// }

// console.log(twosum([2,7,11,15] , 9 ))  // here our brute force solution 


function containsDuplcate(nums){
  let n = nums.length;

  for(let i=0;i<n-2;i++){
    for(let j = i+1;j<n-1;j++){
      if(nums[i] === nums[j]){
        return true;
      }else{
        return false;
      }
    }
  }
}
console.log(containsDuplcate([1,2,3,1]))