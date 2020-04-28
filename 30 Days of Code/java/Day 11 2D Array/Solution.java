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
        int[][] arr = new int[6][6];

        for (int i = 0; i < 6; i++) {
            String[] arrRowItems = scanner.nextLine().split(" ");

            for (int j = 0; j < 6; j++) {
                int arrItem = Integer.parseInt(arrRowItems[j]);
                arr[i][j] = arrItem;
            }
        }

        int hgSum = hourGlassSum(arr);

        System.out.println(hgSum);

        scanner.close();
    }

    private static int hourGlassSum(int[][] arr){
        int max         = 3;
        int arr_size    = arr.length;
        int cant        = (arr_size > max)? arr_size - 2 : 1;

        Integer max_sum     = null;

        for(int i=0; i<cant; i++){
            int[] subarr  = arr[i];
            int scant   = (subarr.length > max)? subarr.length - 2 : 1;

            int[] top       = arr[i];
            int[] middle    = arr[i+1];
            int[] bottom    = arr[i+2];

            for(int si=0; si<scant;si++){
                int hg_sum = top[si] + top[si+1] + top[si+2] + middle[si+1] + bottom[si] + bottom[si+1] + bottom[si+2];

                max_sum = (max_sum == null || hg_sum > max_sum)? hg_sum : max_sum;
            }
        }

        return max_sum;
    }
}
