public class mergeSort {

    public static int[] merge(int[] left, int[] right) {
        int i = 0, j = 0, k = 0;
        int m = left.length;
        int n = right.length;

        int[] result = new int[m + n];
        while (i < m && j < n) { // this loop ends when either i ==m or j==n
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
        // if i == m means nums1 is exhausted
        // we have elements left in nums2 lets fill thaths directly
        while (j < n) {
            result[k] = right[j];
            k++;
            j++;
        }

        // if j == n means nums2 is exhausted
        // we have elements left in nums1 lest fill thats

        while (i < m) {
            result[k] = left[i];
            i++;
            k++;
        }

        // we have to copy them to nums1 because nums1 actual length is m+n
        return result;
    }

    public static int[] mergeSortHelper(int[] arr, int start, int end) {
        if (start == end) {
            int[] result = new int[1];
            result[0] = arr[start];
            return result;
        }
        int mid = (start + end) / 2;
        int[] left = mergeSortHelper(arr, start, mid);
        int[] right = mergeSortHelper(arr, mid + 1, end);
        return merge(left, right);
    }

    public static int[] mergesort(int[] array) {
        return mergeSortHelper(array, 0, array.length - 1);
    }

    public static void main(String[] args) {
        int[] arr = { 5, 4, 3, 2, 1, 0 };
        arr = mergesort(arr);
        for (int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}