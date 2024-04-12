/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
function canEatAllbananasInMidSpeed(piles, h , mid){
    let totalHoursByKoko = 0;
    for(let i =0; i, piles.length;i++){
        totalHoursByKoko += Math.ceil(piles[i] /  mid)}
    
    return totalHoursByKoko <= h;
}
var minEatingSpeed = function(piles, h) {
    let low = 1;
    let high = Math.max(...piles); // it will take orden of n times O(n);
    let ans = 1;

    while(low <+ high){
        let mid = low + Math.floor((high - low )/2);
   
         if(canEatAllbananasInMidSpeed(piles, h ,mid)){
            ans = mid
            high = mid - 1
         }else{
            low = mid + 1;
         }
    }
    return ans

};