function lowerBound(arr,x){
    let n = arr.length;
    let low = 0, high = n-1;
    let ans = arr.length;

    while(low <= high){
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid]<x){
            low = mid+1;
        }else{
            ans = mid
            high = mid -1 ;
        }
    }
    return ans;
}
let arr = [1,1,1,2,2,2,2,3,4,4,5,7,8,9]
console.log(lowerBound(arr,3))