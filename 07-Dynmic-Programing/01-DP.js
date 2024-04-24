/**
 * @param {number} n
 * @return {number}
 */
function f(n){
    if(n==0 || n ==1) return n;
    return f(n-1) + f(n-2);
 }
var fib = function(n) {
 return f(n)
};