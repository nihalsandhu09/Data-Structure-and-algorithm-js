const BinarySearch = function(nums,target){
   
     let n = nums.length;
     let high = n-1;
     let low = 0;

     while(low <= high){

   
         let mid = Math.floor((low+high)/2)
          
         if(nums[mid] === target){
            return mid;
         }
         else if(nums[mid] < target ){
            low = mid+1;
         }else{
            high = mid-1
         }
         
     }
     return -1;
     

}

let a = [3, 4, 6, 7, 9, 12, 16, 17];
let target = 3;
let ind = BinarySearch(a, target);
if (ind === -1) console.log("The target is not present.");
else console.log("The target is at index:", ind);
