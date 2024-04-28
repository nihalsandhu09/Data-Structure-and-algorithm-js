/**
 * @param {number} n
 * @return {number}
 */
// Top down  DP also callled memoization 
// let dp;
// function f(n){
   
//    if(n == 0 || n ==1) return n; // base case 
//        if(dp[n] != -1) return dp[n] ; // if value is not -1 we can directly return ans
//        // if the above if casae doesn't execute , it means subproblem has not been solved
//        return dp[n] =  f(n-1) + f(n-2);
 
// }
// var fib = function(n) {
//      dp = Array(100005).fill(-1);
//        return f(n);
// };





// bottom up DP solution also called tabulization 

let dp;
function f(n){
   
   if(n == 0 || n ==1) return n; // base case 
       if(dp[n] != -1) return dp[n] ; // if value is not -1 we can directly return ans
       // if the above if casae doesn't execute , it means subproblem has not been solved
       return dp[n] =  f(n-1) + f(n-2);
 
}

function f_bu(n){
       dp = Array(100005);
       dp[0] = 0;
       dp[1] = 1;

       for(let i = 2; i<=n;i++){
              dp[i] = dp[i-1] + dp[i-2]
       }
       return dp[n];
}
var fib = function(n) {
//      dp = Array(100005).fill(-1);
       return f_bu(n);
};


