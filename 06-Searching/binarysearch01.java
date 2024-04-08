public class binarysearch01 {

     public static int binarysearch(int[] arr , int x){
        int n = arr.length;
        int low = 0 , high = n-1;

        while(low <= high){
            int mid =  low + (high-low) / 2;
            if(arr[mid] == x){
                return mid;
            }else if(arr[mid]<x){
                low = mid+1;
            }else{
                high = mid-1;
            }
        }
        return -1;
     }
public static void main(String[] args){
    int[] arr = {-6,1,4,7,8,9,19,22,34};
    System.out.println(binarysearch(arr, 21));
}
}
