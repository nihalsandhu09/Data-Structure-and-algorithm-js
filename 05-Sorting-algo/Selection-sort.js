/**
 * 
 * Example 1:
Input: N = 6, array[] = {13,46,24,52,20,9}
Output: 9,13,20,24,46,52
Explanation: After sorting the array is: 9, 13, 20, 24, 46, 52

Example 2:
Input: N=5, array[] = {5,4,3,2,1}
Output: 1,2,3,4,5
Explanation: After sorting the array is: 1, 2, 3, 4, 5
 */


function Sorting(arr){
    let n = arr.length;

    for(let i =0;i<=n-1;i++){
        let mini = i;
        for(let j =i;j<n;j++){
            if(arr[j]< arr[mini]){
                mini = j;
            }
        }
        let temp = arr[mini];
        arr[mini] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

console.log(Sorting([13, 46, 24, 52, 20, 9]))