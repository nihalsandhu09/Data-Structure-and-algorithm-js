// Reverse an Array by Recursion 
// Recursion using Two pinters 

function printArray(ans){
    console.log("Reversed array is:- ");
    for (let i = 0; i < ans.length; i++) {
        console.log(ans[i] + " ");
    }
}

function reverseArray(arr){
let ans = []
for(let i = 0; i<arr.length;i++){
 ans[arr.length - i -1] = arr[i]
}
printArray(ans)
}

function main() {
    let arr = [5, 4, 3, 2, 1];
    reverseArray(arr);
}

main()
