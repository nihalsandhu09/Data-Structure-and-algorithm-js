/**74. Search a 2D Matrix
Solved
Medium
Topics
Companies

You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

 

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

 

Constraints:

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 100
    -104 <= matrix[i][j], target <= 104

 */







var searchMatrix = function(matrix, target) {
    let Arr = [].concat(...matrix);
    let n = Arr.length;
    let low = 0 ;
    let high = n-1;
 
    while(low <= high){
    let mid = low + Math.floor((high- low)/2);
    if(Arr[mid] === target){
     return true;
    }else if(Arr[mid] < target){
      low = mid + 1
     }else{
     high = mid - 1
  }
    } 
    return false;
 };


//  another approach where we wil not take any extra array 

var searchMatrix = function(matrix, target) {
   let m  = matrix.length;
   let n = matrix[0].length;
   let low = 0;
   let high = m*n -1 ;

    while(low <= high){
    let mid = low + Math.floor((high- low)/2);
    let row = Math.floor( mid / n);
    let colum = mid % n 
    if(matrix[row][colum] === target){
     return true;
    }else if(matrix[row][colum] < target){
      low = mid + 1
     }else{
     high = mid - 1
  }
    } 
    return false;
 };