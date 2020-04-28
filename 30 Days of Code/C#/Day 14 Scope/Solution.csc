using System;
using System.Linq;

class Difference {
    private int[] elements;
    public int maximumDifference;



	// Add your code here
    public Difference(int [] elements){
        this.elements = elements;
    }

    public void computeDifference(){
        int max = 0;

        for(int i=0; i<this.elements.Length; i++){
            for(int j=i+1; j<this.elements.Length;j++){
                int res = Math.Abs(this.elements[i] - this.elements[j]);
                max = (res > max)? res : max;
            }
        }

        this.maximumDifference = max;
    }
} // End of Difference Class

class Solution {
    static void Main(string[] args) {
        Convert.ToInt32(Console.ReadLine());
        
        int[] a = Console.ReadLine().Split(' ').Select(x=>Convert.ToInt32(x)).ToArray();
        
        Difference d = new Difference(a);
        
        d.computeDifference();
        
        Console.Write(d.maximumDifference);
        Console.ReadLine();
    }
}
