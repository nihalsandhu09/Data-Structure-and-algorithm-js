

public class PrintName {
    static void func(int i , int n){
        // base case 
        if(i>n) return ;
        System.out.println("Nihal");
        func(i+1,n);
    }

    public static void main(String[] args) {

        // Here, let’s take the value of n to be 4.
        int n = 4;
        func(1,n);
     }
}
