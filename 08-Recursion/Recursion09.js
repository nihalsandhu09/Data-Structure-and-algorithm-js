// factorrial of given natural numbers 

// functional way 
function f2(n){
    if( n == 0 ) return 1 ;
    return n * f2(n-1) ;
  }
  let n = 3;
  console.log(f2(n))


//   Paramtetrised way 

function f2(n){
    if(n < 1) return 1;
return n * f2(n-1)
}
let p = 4;
console.log(f2(p))