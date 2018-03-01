#region 7001 getNames()
/* 001 getNames()
Description:
The following code is not giving the expected results. Can you figure out what the issue is?

The following is an example of data that would be passed in to the function.
 */
public class Person
{
  public int Age;
  public string Name;

  public Person(string name = "John", int age = 21)
  {
    Age = age;
    Name = name;
  }
}

Person[] data = new Person[]
{
  new Person("Joe", 20),
  new Person("Bill", 30),
  new Person("Kate", 23)
};
Kata.GetNames(data) => new string[] {"Joe", "Bill", "Kate"};


//My solution
  using System.Linq;

  public class Kata
  {
    public static string[] GetNames(Person[] data)
    {
        return data.Select(x=> x.Name).ToArray();
    }
  }

//Solution(s) I like:
//1)    http://bit.ly/2gZDNVu
    public static string[] GetNames(Person[] data) => data.Select(d => d.Name).ToArray();

#endregion

#region 7002 Two Oldest Ages
/* 002 Two Oldest Ages (https://www.codewars.com/kata/two-oldest-ages-1/csharp)
Description:
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest
 numbers within the array. The returned value should be an array in the format [second oldest age, oldest age].
The order of the numbers passed in could be any order. The following are some examples of what the method should return
(shown in different languages but the logic will be the same between all three).

    LargestTwo.TwoOldestAges(new int[] {1, 2, 10, 8}) => new int[] {8, 10}
    ```nim twoOldestAges(@[1, 5, 87, 45, 8, 8]) # should return [45, 87]
 */


//My solution
    using System.Linq;
    public class LargestTwo
    {
      public static int[] TwoOldestAges(int[] ages)
      {
        return ages.OrderByDescending(x => x).Take(2).Reverse().ToArray();
      }
    }

//Solution(s) I like:
//1) http://bit.ly/2zaQbXr
    public static int[] TwoOldestAges(int[] ages)  {
      return ages.OrderByDescending(u=>u).Take(2).OrderBy(u=>u).ToArray();
    }
//2) http://bit.ly/2lILNfa
    public static int[] TwoOldestAges(int[] ages)
    {
      List<int> Array = ages.ToList();
      int Highest = Array.Max();
      Array.Remove(Highest);
      int SecondHighest = Array.Max();
      return new int[] {SecondHighest, Highest};
    }

#endregion

#region  7003 Array Filter
/*7003 JavaScript Array Filter (https://www.codewars.com/kata/javascript-array-filter/csharp)
Description:
Starting with .NET Framework 3.5, C# supports a Where (in the System.Linq namespace) method which allows a user to filter arrays based on a predicate. Use the Where method to complete the function given.
Enumerable.Where documentation: https://msdn.microsoft.com/en-us/library/bb534803(v=vs.110).aspx
The solution would work like the following:

Kata.GetEvenNumbers(new int[] {2, 4, 5, 6}) => new int[] {2, 4, 6}
 */

 //My solution
    using System.Linq;
    public class Kata
    {
      public static int[] GetEvenNumbers(int[] numbers)
      {
        return numbers.Where(n=> n%2 == 0).ToArray();
      }
    }

 //Solution(s) I like:
//1) https://www.codewars.com/kata/reviews/5995892ca82c79580600001e/groups/59ba722671780d1c6a0020e7
    public static int[] GetEvenNumbers(int[] numbers) => numbers.Where(x => x % 2 == 0).ToArray();
#endregion

#region  7004 Reversed Strings
/*7004 Reversed Strings (https://www.codewars.com/kata/reversed-strings/csharp)
Description:
Complete the solution so that it reverses the string value passed into it.
    Kata.Solution("world") //return "dlrow"
 */

 //My solution
    using System;
    public static class Kata
    {
      public static string Solution(string str)
      {
          char[] arr = str.ToCharArray();
          Array.Reverse(arr);
          return new string(arr);
          //!! this solution about 5times faster than new string(str.Reverse().ToArray()); (NEED using System.Linq;)
      }
    }

 //Solution(s) I like:
//1) Clever(4) https://www.codewars.com/kata/reviews/59ad726ac2479b7127000bcb/groups/59aebdb54aab41a685000da3
    public static string Solution(string str)
    {
      string res="";
      foreach(char s in str){
      res=s+res;
      }
      return res;
    }
//2) https://www.codewars.com/kata/reviews/59ad726ac2479b7127000bcb/groups/59c23a7d322eed5d3c00097d
    public static string Solution(string str)
    {
      char[] chars = str.ToCharArray();
      Array.Reverse(chars);
      return string.Join("", chars);
    }
#endregion
