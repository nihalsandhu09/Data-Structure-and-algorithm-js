    
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   let i =0;
   let j = 0;
   let k = 0;
   let result =  new Array(m+n);
   
   while(i<m && j<n){     // this loop ends when  either i ==m or j==n
    if(nums1[i]<= nums2[j]){
        result[k] =nums1[i];
        k++;
        i++;
    }else{
        result[k] = nums2[j]
        k++;
        j++;
    }

   }
// if i == m means nums1 is exhausted 
// we have elements left in nums2 lets fill thaths  directly 
while(j<n){
    result[k] = nums2[j]
        k++;
        j++;
}
 
//  if j == n means nums2 is exhausted 
// we have elements left in nums1 lest fill thats 

while(i<m){
    result[k] =nums1[i];
    i++;
    k++;
}

// we have to copy them to nums1 because nums1 actual length is m+n 
 k = 0; 
 while(k<m+n){
    nums1[k] = result[k]
    k++;
 }
};


const arr = [1,2,3,0,0,0]
const arr2 = [2,5,6]

console.log(merge(arr,arr2))
