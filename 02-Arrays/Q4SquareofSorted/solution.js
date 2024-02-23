// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

// Example 1:

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:

// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in non-decreasing order.
 

// 
// var squareSortedArr =function(nums){

//  let n = nums.length;
//  let newArr = [];

//  for(let i=0;i>=n-1;i++){
//     newArr.push(nums[i] ** 2)
//  }
// return newArr.sort((a,b)=> a-b);
// }

// console.log(squareSortedArr( [-7,-3,2,3,11]))

// using inbuilt function 
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const newArr = [];
   for(i =0;i<nums.length;i++){
     newArr.push(nums[i] * nums[i])
   }
   return newArr.sort((a,b)=> a-b);
// let n = nums.length;
// let i = 0;
// let j = n-1;

// while(i<=j){
//   if()

   
  
     
}



// using Two pointer solution >>>>>>>>>> 

