function lowerbound(arr,n,x){

      
    let low= 0;
    let high = n-1;
    let ans = n
    while(low<=high){
        let mid =low+ Math.floor((low+high)/2)

        if(arr[mid]>= x){
            ans = mid;
            high =mid-1
        }else{
            low = mid+1
        }
    }
     return ans;
     
     
}

let arr= [1,2,2,4,5]
console.log(lowerbound(arr,5,1))