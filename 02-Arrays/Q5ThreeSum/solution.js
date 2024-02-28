var threeSum = function (nums){
    let result =[]
    let n = nums.length;
    nums.sort((a,b)=> a-b)

    for(let i =0;i<n-2;i++){
        if( i === 0 ||(i >0 && nums[i] !== nums[i - 1])){
            let left = i+1;
            let right = n-1;
            let target = -nums[i];

            while(left<right){
                if(nums[left] + nums[right] === target){
                    result.push([nums[i] , nums[left] , nums[right]])

                    while(left<right && nums[left] === nums[left+1]){
                        left++;
                    }while(left<right && nums[right] === nums[right-1]){
                        right--;
                    }
                    left++;
                    right--;
                }
                else if(nums[left] + nums[right] <target){
                    left++;
                }else{
                    right--;
                }
            }
        }
    }
    return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]))