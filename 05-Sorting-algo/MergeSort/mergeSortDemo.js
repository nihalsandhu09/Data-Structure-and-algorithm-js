function mergeSort(arr) {
  if (arr.length <= 1) {
      return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
          result.push(left[leftIndex]);
          leftIndex++;
      } else {
          result.push(right[rightIndex]);
          rightIndex++;
      }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// Example usage
const arr = [64, 34, 25, 12, 22, 11, 90];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [11, 12, 22, 25, 34, 64, 90]


function mergeSort2(arr){
  // Base case 
  if(arr.length <= 1){
    return arr;
  }
}