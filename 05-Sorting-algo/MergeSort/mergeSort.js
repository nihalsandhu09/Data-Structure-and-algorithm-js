function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // Base case: array is already sorted
    }

    // Divide the array into two halves
    const middle = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, middle);
    const rightHalf = arr.slice(middle);

    // Recursively sort the two halves
    const leftSorted = mergeSort(leftHalf);
    const rightSorted = mergeSort(rightHalf);

    // Merge the sorted halves
    return merge(leftSorted, rightSorted);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // Compare elements from the two halves and merge them
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    // Merge any remaining elements from the left half
    while (leftIndex < left.length) {
        result.push(left[leftIndex]);
        leftIndex++;
    }

    // Merge any remaining elements from the right half
    while (rightIndex < right.length) {
        result.push(right[rightIndex]);
        rightIndex++;
    }

    return result;
}

// Example usage
const arr = [8, 3, 1, 7, 0, 10, 2];
console.log("Original array:", arr);
const sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);
