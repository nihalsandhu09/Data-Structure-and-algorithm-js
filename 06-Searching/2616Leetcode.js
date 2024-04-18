// 2616. Minimize the Maximum Difference of Pairs
// Medium
// Topics
// Companies
// Hint

// You are given a 0-indexed integer array nums and an integer p. Find p pairs of indices of nums such that the maximum difference amongst all the pairs is minimized. Also, ensure no index appears more than once amongst the p pairs.

// Note that for a pair of elements at the index i and j, the difference of this pair is |nums[i] - nums[j]|, where |x| represents the absolute value of x.

// Return the minimum maximum difference among all p pairs. We define the maximum of an empty set to be zero.

// Example 1:

// Input: nums = [10,1,2,7,1,3], p = 2
// Output: 1
// Explanation: The first pair is formed from the indices 1 and 4, and the second pair is formed from the indices 2 and 5.
// The maximum difference is max(|nums[1] - nums[4]|, |nums[2] - nums[5]|) = max(0, 1) = 1. Therefore, we return 1.

// Example 2:

// Input: nums = [4,2,1,2], p = 1
// Output: 0
// Explanation: Let the indices 1 and 3 form a pair. The difference of that pair is |2 - 2| = 0, which is the minimum we can attain.

// Constraints:

//     1 <= nums.length <= 105
//     0 <= nums[i] <= 109
//     0 <= p <= (nums.length)/2

// Solution

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
// var minimizeMax = function (nums, p) {
//     if (p === 0) return 0;
//     let n = nums.length - 1;
//     nums.sort((a, b) => a - b);
//     let low = 0,
//       high = nums[n] - nums[0];
  
//     while (low < high) {
//       let mid = Math.floor((low + high) / 2);
//       if (isValid(mid)) high = mid;
//       else low = mid + 1;
//     }
//     return low;
  
//     function isValid(max) {
//       let i = 1,
//         pairs = 0;
  
//       while (i <= n) {
//         if (nums[i] - nums[i - 1] <= max) {
//           pairs++;
//           i = i + 2;
//         } else {
//           i++;
//         }
//         if (pairs == p) return true;
//       }
//       return false;
//     }
//   };

//   console.log(minimizeMax([10,1,2,7,1,3] , 2))



function canformAtLeastPpairsWithAtmostMidDiff(nums , mid , p){
    let i = 0 , count = 0;

    while(i < nums.length - 1){
    if(nums[i+1] - nums[i] <= mid){
        count++;
        i += 2;
    }else{
        i++
    }
    }
    return count >= p // we need atleast p pirs  wot max diff as mid
}
var minimizeMax = function (nums, p) {

const n = nums.length;
nums.sort((a,b)=>a-b);

let low =0 ; 
let high = nums[n-1] - nums[0];
let ans = high;
while(low <= high){
    let mid = low + Math.floor((high - low) / 2);
   if(canformAtLeastPpairsWithAtmostMidDiff(nums , mid, p)){
    ans = mid;
    high = mid - 1;
   }else{
    low = mid + 1;
   }
}
return ans 
}