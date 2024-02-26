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
var sortedSquares = function (nums) {
  const newArr = [];
  for (i = 0; i < nums.length; i++) {
    newArr.push(nums[i] * nums[i]);
  }
  return newArr.sort((a, b) => a - b);
  //
  //
};

// lets understand sort method
// let arr = [8,9,4,5,6,7,8,4,5,1,2]
// // this sort method take a callback function a comparitive function
// arr.sort((a,b)=> a-b)
// console.log(arr)

// arr.sort((a,b)=> b-a)
// console.log(arr)

// if the callback of sort function return  a negative value - then the first argument is put first and then the Second argument
let arr = [3, 4, 1, 5, 10, 9];

/**
 * if the callback of sort function returns a negative value
 *      - the first argument is put first and then the second argument
 * else if the callback of the sort function returns a positive value
 *      - the second argument is put first and then the first argument
 *
 */

/**
 *
 * x = 4
 * y = 5
 * (x, y) => x - y
 * 4 - 5 -> -ve
 *
 * [4, 5]
 *
 *
 * x = 7
 * y = 3
 * (x, y) => x - y
 * 7 - 3 -> +ve
 *
 * [3, 7]
 */

arr.sort((x, y) => x - y); // increasing

console.log(arr);

/**
 *
 * x = 4
 * y = 5
 * (x, y) => y - x
 * 5 - 4 -> +ve
 *
 * [5, 4]
 *
 *
 * x = 7
 * y = 3
 * (x, y) => y - x
 * 3 - 7 -> -ve
 *
 * [7, 3]
 */
arr.sort((x, y) => y - x); // decreasing

console.log(arr);
// using Two pointer solution >>>>>>>>>>

// optimize solution

// * @param {number[]} nums
// * @return {number[]}
// */

var sortedSquares = function (nums) {
  // first we need to store length of array
  let n = nums.length;
  // and we create a new Array of the length of given array
  let result = Array(n);

  // and we have put pointers on given array
  let left = 0;
  let right = n - 1;

  // and after that we have to put one variable to go through and put values to new array using loop ;

  for (let i = n - 1; i >= 0; i--) {
    if (nums[left] ** 2 < nums[right] ** 2) {
      result[i] = nums[right] ** 2;
      right--;
    } else {
      result[i] = nums[left] ** 2;
      left++;
    }
  }
  return result;
};

console.log(sortedSquares([-7,-3,2,3,11]))