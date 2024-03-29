function BinarySearch(nums , target){
let n = nums.length;
let low = 0, high = n-1;

while(low<=high){
    let mid = Math.floor((low+high) / 2);

    if(nums[mid] === target) return mid;
    else if(target > nums[mid]) low = mid+1;
    else high = mid-1;
}
return -1;
}
let a = [3, 4, 6, 7, 9, 12, 16, 17];
let target = 6;
let ind = BinarySearch(a, target);
if (ind === -1) console.log("The target is not present.");
else console.log("The target is at index:", ind);
