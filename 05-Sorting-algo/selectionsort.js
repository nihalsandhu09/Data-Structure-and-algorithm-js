function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min_idx = findMinIdx(arr, i);
    if (min_idx !== i) {
      let temp = arr[i];
      arr[i] = arr[min_idx];
      arr[min_idx] = temp;
    }
  }
}

function findMinIdx(arr, i) {
  let min_idx = i;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min_idx]) {
      min_idx = j;
    }
  }
  return min_idx;
}

const arr = [5, 4, 3, 2, 1];
selectionSort(arr);
console.log(arr);



