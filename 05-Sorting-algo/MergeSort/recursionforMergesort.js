function Recursion(n){
if(n<1){
    return 1 ;
}else{
    return n* Recursion(n-1)
}
}

console.log(Recursion(5))