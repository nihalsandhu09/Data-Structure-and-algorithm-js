/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if( x === 1) return 1;

    let low = 1 ;
    let high =  x-1 //Math.floor(x/ 2);

    while(low <= high){
        let mid = low + Math.floor((high - low)/2);
        let square = mid * mid;
        if(square === x){
            return mid;
        }else if(square > x){
            high = mid - 1;
        }else {
            low = mid + 1;
        }
    }
    return high // Return the closest integer less than or equal to the square root
};

const output = mySqrt(8)
console.log(output)