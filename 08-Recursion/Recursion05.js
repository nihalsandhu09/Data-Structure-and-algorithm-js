// Print N to 1 ;

function f(i , n){
    if(i<1){
        return;
    }
    console.log(i)
    f(i-1,n)
}

let n = 4;
f(n,n)