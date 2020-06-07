using System;
using System.Collections.Generic;
using System.IO;

class Solution {
    static void Main(String[] args) {
        int T = int.Parse(Console.ReadLine());

        while(T-- > 0){
            int n = int.Parse(Console.ReadLine());
            Console.WriteLine(isPrime(n)? "Prime" : "Not Prime");
        }
    }

    public static bool isPrime(int n){
        if(n < 2){
            return false;
        }
        else if(n==2){
            return true;
        }
        else if(n%2==0){
            return false;
        }

        int sqrt = (int) Math.Sqrt(n);
        for (int i = 3; i <= sqrt; i += 2) { // skips even numbers for faster results
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
