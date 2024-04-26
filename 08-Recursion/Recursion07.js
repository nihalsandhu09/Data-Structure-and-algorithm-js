// Print n to 1 using backtracking 

function f(i,n){
    if(i > n){
        return ;
    }
    f(i+1 , n);
    console.log(i)
}
f(0,5)