function merge(left, right) {
  let i = 0;
  (j = 0), (k = 0);
  const m = left.length;
  const n = right.length;

  let result = new Array(m + n);
  while (i < m && j < n) {
    if (left[i] <= right[j]) {
      result[k] = left[i];
      k++;
      i++;
    } else {
      result[k] = right[j];
      k++;
      j++;
    }
  }

  while (j < n) {
    result[k] = right[j];
    k++;
    j++;
  }
  while (i < m) {
    result[k] = left[i];
    i++;
    k++;
  }
  return result;
}
function mergeSortHelper(arr, start, end) {
  if (start === end) {
    let result = new Array(1);
    result[0] = arr[start];
    return result;
  }

  let mid = Math.floor((start + end) / 2);
  let left = mergeSortHelper(arr, start, mid);
  let right = mergeSortHelper(arr, mid + 1, end);
  return merge(left, right);
}
function mergeSort(array) {
  return mergeSortHelper(array, 0, array.length - 1);
}
let arr = [5, 4, 3, 2, 1, 0];
arr = mergeSort(arr);
console.log(arr);
