function reArrangeArr(arr, p){
 let n = arr.length;
  
  for(let i =0;i<n;i++){
    for(let j =0;j<n;j++){
        if(arr[j] > p){
            let temp = arr[i];
             arr[i] = arr[j];
             arr[j] = temp;
        }
    }
  }
     return arr;

}

const p = reArrangeArr([9,6,3,1,4,8] , 4)
console.log(p)