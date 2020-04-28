using System;
using System.Linq;

class Person{
    protected string firstName;
    protected string lastName;
    protected int id;
    
    public Person(){}
    public Person(string firstName, string lastName, int identification){
            this.firstName = firstName;
            this.lastName = lastName;
            this.id = identification;
    }
    public void printPerson(){
        Console.WriteLine("Name: " + lastName + ", " + firstName + "\nID: " + id); 
    }
}

class Student : Person{
    private int[] testScores;  
  
    /*  
    *   Class Constructor
    *   
    *   Parameters: 
    *   firstName - A string denoting the Person's first name.
    *   lastName - A string denoting the Person's last name.
    *   id - An integer denoting the Person's ID number.
    *   scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    public Student(){}
    public Student(string firstName, string lastName, int id, int[] testScores) : base(firstName, lastName, id){
        this.testScores = testScores;
    }
    
    /*  
    *   Method Name: Calculate
    *   Return: A character denoting the grade.
    */
    // Write your method here

    public String Calculate(){
        int score = this.testScores.Sum() / this.testScores.Length;
        String scale = "";

        if(score < 40){
            scale = "T";
        }
        else if(score < 55){
            scale = "D";
        }
        else if(score < 70){
            scale = "P";
        }
        else if(score < 80){
            scale = "A";
        }
        else if(score < 90){
            scale = "E";
        }
        else if(score <= 100){
            scale = "O";
        }

        return scale;
    }
}

class Solution {
    static void Main() {
        string[] inputs = Console.ReadLine().Split();
        string firstName = inputs[0];
        string lastName = inputs[1];
        int id = Convert.ToInt32(inputs[2]);
        int numScores = Convert.ToInt32(Console.ReadLine());
        inputs = Console.ReadLine().Split();
        int[] scores = new int[numScores];
        for(int i = 0; i < numScores; i++){
            scores[i]= Convert.ToInt32(inputs[i]);
        } 
        
        Student s = new Student(firstName, lastName, id, scores);
        s.printPerson();
        Console.WriteLine("Grade: " + s.Calculate() + "\n");
    }
}