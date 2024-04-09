// 34. Find First and Last Position of Element in Sorted Array
// Medium
// Topics
// Companies
// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const lowerBound = (nums, target) => {
        let left = 0, right = nums.length - 1, index = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] >= target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            if (nums[mid] === target) index = mid;
        }
        return index;
    }
  
    const upperBound = (nums, target) => {
        let left = 0, right = nums.length - 1, index = -1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
            if (nums[mid] === target) index = mid;
        }
        return index;
    }

    const leftIndex = lowerBound(nums, target);
    const rightIndex = upperBound(nums, target);
    
    return [leftIndex, rightIndex];
};

console.log(searchRange([5,7,7,8,8,10], 8)); // Output: [3, 4]
console.log(searchRange([5,7,7,8,8,10], 6)); // Output: [-1, -1]
console.log(searchRange([], 0))




/**
 * @param {number[]} nums
* @param {number} target
* @return {number[]}


function lowerBound(arr,x){
   let n = arr.length;
   let low = 0 , high = n-1;
   let ans = arr.length;
   while(low <= high){
 let mid = low + Math.floor((high- low)/2);

 if(arr[mid] < x){
   low = mid + 1; // discard the left half
 }else{
   ans = mid;
   high = mid- 1;
 }
   }
   return ans
}

function upperBound(arr , x){
   let n = arr.length;
   let low= 0;
   let high = n-1;
   let ans = arr.length;

   while(low <= high){
       let mid = low + Math.floor((high - low)/2);
       if(arr[mid] <= x){
           low = mid + 1 // discard the left half
        }else{ // arr[mid] > x
           ans = mid;
           high =mid-1
        }
   }
   return ans;
}
var searchRange = function(nums, target) {
   let lb = lowerBound(nums ,target);
   if(lb == nums.length || nums[lb] != target){
       return [-1,-1]
   }
   let ub = upperBound(nums, target);
   return [ lb , ub-1]
}; **/