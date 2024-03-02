/**Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]
 

Constraints:

n == nums.length
1 <= n <= 300
nums[i] is either 0, 1, or 2. */

// Two pointer approach 

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
 
    let n = nums.length;
 
    let left = 0;
     let right = n-1;
  let curr = 0;
 
    while(curr<=right){
        if(nums[curr] == 0){
           [  nums[curr++] , nums[left++]] =[ nums[left],nums[curr] ]
        }else if(nums[curr] ==2){
            [nums[curr],nums[right--]] = [nums[right],nums[curr]]
        }else{
            curr++;
        }
    }
 
 }


//  Two poniter 


var sortColors = function(nums) {
    let n = nums.length;
    let low = 0;
    let high = n-1;
    let i = 0;

    while(i<=high){
    
         if(nums[i] === 0){
            swap(nums,i,low)
            i++;
            low++;
         }else if(nums[i] === 1){
            i++;
         }else{
            swap(nums, i, high);
            high--;
         }
          
    }







    function swap(nums,i,j){
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}