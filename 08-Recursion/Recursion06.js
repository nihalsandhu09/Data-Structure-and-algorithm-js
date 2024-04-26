// Print 1 to n using backtracking 

function f(i , n){
    if(i < 1){
        return;
    }
    f(i -1 ,n)
    console.log(i)
}
let n = 4;
f(n,n)