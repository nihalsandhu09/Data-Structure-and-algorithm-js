function insertionSort(arr){
    let n = arr.length;

    for(let i = 1;i<n;i++){
        let element = arr[i];
        let j = i-1;
        for( ;j>=0;j--){
            if(arr[j] >element){
                arr[j+1] = arr[j]
            }else{
                break;
            }
        }
        arr[j+1] = element;
    }
}

const arr = [7,8,9,10,7,8,9,5,9,7]
insertionSort(arr)
console.log(arr)