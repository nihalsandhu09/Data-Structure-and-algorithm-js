// Print sum of first n Numbers 

// Paramtetrised way 

function f(i , sum){
    if(i < 1){
        console.log(sum);
        return ;
    }
    f(i-1 , sum + i)
}
f(5 , 0)



// functional way 


function f2(n){
  if( n == 0 ) return 0 ;
  return n + f2(n-1) ;
}
let n = 3;
console.log(f2(n))