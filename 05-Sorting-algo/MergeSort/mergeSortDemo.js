// so the first step for merge sort algorithm 
// 1 divide the array into halves this is done by recusribly until each subarray contains only one element . this step is key to divide and coquer strategy 
 function mergesortArray(arr){
    // we need  a base caase 

    if(arr.length <=1){
        return 1;
    }

    const middle = Math.floor(arr.length / 2 );
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);
    return merge(mergesortArray(left), mergesortArray(right))
 }

 function merge(left,rigth){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0
    
    while(leftIndex<left.length && rightIndex < rigth.length){
  if(left[leftIndex] < right[rightIndex] ){
    result.push(left[leftIndex]);
    leftIndex++;
  }else{
    result.push( rigth[rightIndex])
    right++;
  }

    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}

const arr = [5,3,8,4,2,1,10,7]
const sortedArr = mergesortArray(arr)
console.log(sortedArr)