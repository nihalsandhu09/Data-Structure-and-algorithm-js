function SelectionSort(arr){
  let n = arr.length;
      for(let i = 0;i<n-1;i++){
        let min_idx = FindMinIdx(arr,i)
            if(arr[i] !== arr[min_idx]){
        
                 let temp = arr[i]
                 arr[i] = arr[min_idx]
                 arr[min_idx] = temp;
                 
            }
        
      }
      
      
     
}

function FindMinIdx(arr,i){
  let min_idx = i;
    for(let j = i+1;j<arr.length;j++){
        if(arr[j] < arr[min_idx] ){
            min_idx = j
        }
    }
    return min_idx;
}


const arr = [1,4,5,8,79,5,8,5,8]

SelectionSort(arr)
console.log(arr)