
public class PrintNameTwo {

    public static void func(int i, int n) {
        if (i > n) return;
        i++;
        System.out.println("Nihal");
        func(i, n);
    }

    public static void main(String[] args) {
        int n = 4;
        func(0, n);
    }
}

