function bubbleSort(arr){ 
    let n = arr.length;
    for(let i =0;i<n;i++) { 
        let isSwapped = false;
        for(let j = 0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp
                isSwapped = true;
            }
        }
        if(isSwapped === false) return `array is allready sorted`;
    }

}
   

// const arr = [5,4,3,2,1]
const arr = [1,2,3,4,5]
bubbleSort(arr)
console.log(arr)