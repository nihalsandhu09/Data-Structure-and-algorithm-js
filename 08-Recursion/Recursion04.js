// Print linearly 1 To n 

function f(i,n){
    if(i === n + 1){
        return ;
    }
    console.log(i)
    i++;
    f(i , n)
}

f(1 , 15)