function upperBound(arr,x){
    let n = arr.length;
    let low = 0 , high = n-1;
    let ans = n;

    while(low<=high){
        let mid = low + Math.floor((high-low)/2);
        if(arr[mid] > x){
            ans = mid;
            high = mid-1;
        }else{
            low = mid+1
        }
    }
    return ans;
}

let arr = [3,5,8,9,15,19];
console.log(upperBound(arr,9))