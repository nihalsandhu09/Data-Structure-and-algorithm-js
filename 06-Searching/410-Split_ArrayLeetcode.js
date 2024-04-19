/**410. Split Array Largest Sum
Hard
Topics
Companies

Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum of any subarray is minimized.

Return the minimized largest sum of the split.

A subarray is a contiguous part of the array.

 

Example 1:

Input: nums = [7,2,5,10,8], k = 2
Output: 18
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8], where the largest sum among the two subarrays is only 18.

Example 2:

Input: nums = [1,2,3,4,5], k = 2
Output: 9
Explanation: There are four ways to split nums into two subarrays.
The best way is to split it into [1,2,3] and [4,5], where the largest sum among the two subarrays is only 9.

 

Constraints:

    1 <= nums.length <= 1000
    0 <= nums[i] <= 106
    1 <= k <= min(50, nums.length)

 */
    function splitArray(nums, k) {
        let left = Math.max(...nums);
        let right = nums.reduce((acc, cur) => acc + cur, 0);
    
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (isValid(nums, mid, k)) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    
        return left;
    }
    
    function isValid(nums, maxSum, k) {
        let count = 1;
        let currentSum = 0;
    
        for (let num of nums) {
            currentSum += num;
            if (currentSum > maxSum) {
                count++;
                currentSum = num;
                if (count > k) {
                    return false;
                }
            }
        }
    
        return true;
    }
    
    // Example cases
    console.log(splitArray([7,2,5,10,8], 2)); // Output: 18
    console.log(splitArray([1,2,3,4,5], 2)); // Output: 9
    

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function canSplitInToKSubArraysWithmaxMidSum(nums, mid, k){
    let subArrayCount  = 0;
    let totalSum = 0;
    for(let i = 0; i < nums.length;i++){
        if(totalSum + nums[i] > mid){
            subArrayCount++;
            totalSum = 0;
        }
        totalSum += nums[i]
    }
      subArrayCount++;
      return subArrayCount <= k;
}
var splitArray = function(nums, k) { 
let low = Math.max(...nums);
let high = nums.reduce((acc, cur) => acc + cur, 0);
let ans = high;
while(low <= high){
    let mid = low + Math.floor((high - low) / 2);
    
    if(canSplitInToKSubArraysWithmaxMidSum(nums, mid, k)){
     ans = mid ; 
     high = mid - 1;
    }else{
        low = mid + 1 ;
    }
}
return ans;
}

    