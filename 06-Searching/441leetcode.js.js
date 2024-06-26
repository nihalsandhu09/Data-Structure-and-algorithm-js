/**441. Arranging Coins
Solved
Easy
Topics
Companies

You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.

Given the integer n, return the number of complete rows of the staircase you will build.

 

Example 1:

Input: n = 5
Output: 2
Explanation: Because the 3rd row is incomplete, we return 2.

Example 2:

Input: n = 8
Output: 3
Explanation: Because the 4th row is incomplete, we return 3.

 

Constraints:

    1 <= n <= 231 - 1

 */

    var arrangeCoins = function(n) {
 
         
     
        let low = 1;
        let high = n ; 
        let ans = 1;

        while(low  <= high){ 
            let mid = low + Math.floor((high - low)/ 2)
            let value = Math.floor(((mid) * (mid+1)) / 2);
            if(value <= n ){
                ans = mid;
                low = mid + 1;
            }else{
                high = mid - 1
            }
        }
            return ans;

        
    }

    const output = arrangeCoins(8)
    console.log(output)