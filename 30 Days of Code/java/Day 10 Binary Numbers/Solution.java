import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.regex.*;

public class Solution {

    private static final Scanner scanner = new Scanner(System.in);

    public static void main(String[] args) {
        int n = scanner.nextInt();
        scanner.skip("(\r\n|[\n\r\u2028\u2029\u0085])?");

        String      str = "";
        String[]    arr;
        int         max = 0;

        while(n > 0){
            str += (n%2==0)?0 : 1;
            n = (int)(n/2);
        }
        
        arr = str.split("0");

        for(int i=0; i<arr.length;i++){
            String lbl = arr[i];

            max = (lbl.length() > max)? lbl.length() : max;
        }

        System.out.println(max);

        scanner.close();
    }
}
