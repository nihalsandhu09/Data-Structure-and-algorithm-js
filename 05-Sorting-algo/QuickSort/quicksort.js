function randomPivot(arr,start,end){
    let randomIndex = Math.floor(Math.random() * (end - start + 1)) + start;
    [arr[randomIndex] ,arr[end]] = [arr[end] , arr[randomIndex]];
    return partion(arr,start,end)
}

function partion(arr,start,end){
    const pivot = arr[end];
    let i = start-1;

    for(let j = start; j<end;j++){
        if(arr[j] <= pivot){
            i++;
            [arr[i] , arr[j]] = [arr[j] , arr[i]];
        }
    }
    [arr[i+1], arr[end]] = [arr[end] , arr[i+1]];
    return i+1;
}


function randomizedQuickSort(arr,start=0,end=arr.length-1){
    if(start < end){
        const pivotIndex = randomPivot(arr,start,end);
        randomizedQuickSort(arr,start,pivotIndex-1);
        randomizedQuickSort(arr,pivotIndex+1,end);
    }
    return arr;
}

const array = [3,6,8,10,1,2,1]

console.log(randomizedQuickSort(array))
