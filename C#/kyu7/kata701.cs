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


#region  7005 Sort Numbers
/*7005 Sort Numbers (https://www.codewars.com/kata/sort-numbers/train/csharp)
Description:
    Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

    For example:
        SortNumbers(new int[] { 1, 2, 10, 50, 5 }); // should return new int[] { 1, 2, 5, 10, 50 }
        SortNumbers(null); // should return new int[] { }
 */

 //My solution
    using System.Linq;

    public class Kata
    {
      public static int[] SortNumbers(int[] nums)
      {
        return nums?.OrderBy(x => x).ToArray() ?? new int[0];
      }
    }

 //Solution(s) I like:
//1) Best(2)
    public static int[] SortNumbers(int[] nums)
    {
      if(nums == null)
        nums = new int[0];

      Array.Sort(nums);
      return nums;
    }
//2) Clever(2) https://www.codewars.com/kata/reviews/57b9e2ee5b446c654e0000f4/groups/57cd31a9d542d356930000cb
    public static int[] SortNumbers(int[] nums)
    {
        return nums == null || !nums.Any() ? new int[] { } : nums.OrderBy(n => n).ToArray();
    }
//3) https://www.codewars.com/kata/reviews/57b9e2ee5b446c654e0000f4/groups/5a16a0fcf2e3404b67002246
    public static int[] SortNumbers(int[] nums)
    => nums == null? new int[0] : nums.OrderBy(x=>x).ToArray();
#endregion


#region 7006 Ninja vs Samurai: Strike
/*7006 Ninja vs Samurai: Strike (https://www.codewars.com/kata/ninja-vs-samurai-strike)
Description:
Something is wrong with our Warrior class. The strike method does not work correctly. The following shows an example of this code being used:
    var ninja = new Warrior("Ninja");
    var samurai = new Warrior("Samurai");

    samurai.Strike(ninja, 3);
    // ninja.Health should == 70
Can you figure out what is wrong?
*/

//My solution
  using System;

  public class Warrior
  {
      private string name;

      public Warrior(string name) {
          this.name = name;
      }

      public int Health { get; set; } = 100;
      //WAS static KEYword which is WRONG ( public static void Strike)
      public void Strike(Warrior enemy, int swings) {
          enemy.Health = Math.Max(0, enemy.Health - (swings * 10));
      }
  }

//Solution(s) I like(links):
//All solutions are almost the same
#endregion


#region 7007 Float Precision
/*7007 Float Precision (https://www.codewars.com/kata/float-precision/csharp)
Description:
Update the solution method to round the argument value to the closest precision of two. The argument will always be a float.
    Kata.Round(23.23456) => 23.23
    Kata.Round(1.546) => 1.55
*/

//My solution
    using System;
    public class Kata
    {
      public static double Round(double n)
      {
        return Math.Round(n,2);
      }
    }

//Solution(s) I like(links):
//1) https://www.codewars.com/kata/reviews/59957ccaa82c793822000014/groups/59a161ae70e25ee4ce000046
    return Math.Round(n * 100) / 100;
//2) https://www.codewars.com/kata/reviews/59957ccaa82c793822000014/groups/5abcf8eeeb22488c40000fbe
    return Math.Round(n, 2, MidpointRounding.AwayFromZero);
#endregion

#region 7008 Retrieve array value by index with default
/* 7008 Retrieve array value by index with default (https://www.codewars.com/kata/retrieve-array-value-by-index-with-default/csharp)
Description:
Complete the solution. It should try to retrieve the value of the array at the index provided. If the index is out of the array's max bounds then it should return the default value instead.
Example:
    int[] data = new int[] {1, 2, 3};
    Kata.Solution(data, 1, -1) => 2
    Kata.Solution(data, 5, -1) => -1

    // negative values work as long as they aren't out of the length bounds
    // if an index is negative, start from the end of the array
    Kata.Solution(data, -1, -1) => 3
    Kata.Solution(data, -5, -1) => -1
 */

//My solution
    using System;

    public static class Kata
    {
      public static int Solution(int[] items, int index, int defaultValue)
      {
          int result = defaultValue;
          if (index>0 && index<items.Length)
          {
              result = items[index];
          }
          else if (index<0 && Math.Abs(index)<=items.Length)
          {
              result = items[items.Length + index]; //index is negative so we use + not -(minus)
          }
        return result;
      }
    }


//Solution(s) I like(links):
//1) Best(1) https://www.codewars.com/kata/reviews/59bc29eae8e9c7bf36002575/groups/59ed979c37ccee4c11001319
    using System;
    using System.Linq;
    using System.Collections.Generic;
    public static class Kata
    {
      public static int Solution(int[] items, int index, int defaultValue)
        =>Math.Abs(index) > items.Length ? defaultValue
                                          :index>=0?items[index]:items[items.Length+index];
    }
//2) https://www.codewars.com/kata/reviews/59bc29eae8e9c7bf36002575/groups/59c25f1203a9adc72b000e48
    public static int Solution(int[] items, int index, int defaultValue)
    {
        if (index > items.Length || -index > items.Length)
            return defaultValue;
        if (index < 0)
            return items[items.Length + index];
        return items[index];
    }
//3) https://www.codewars.com/kata/reviews/59bc29eae8e9c7bf36002575/groups/5ac50932cd661b421700072f
    public static int Solution(int[] items, int index, int defaultValue)
    {
        if (index < 0) index = items.Length + index;
        return index >= 0 && index < items.Length ? items[index] : defaultValue;
    }
#endregion

#region 7009 Largest 5 digit number in a series
/*7009 Largest 5 digit number in a series (https://www.codewars.com/kata/largest-5-digit-number-in-a-series)
Description:
  In the following 6 digit number:
    283910
  91 is the greatest sequence of 2 consecutive digits.
  In the following 10 digit number:
    1234567890
  67890 is the greatest sequence of 5 consecutive digits.
  Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.
    Adapted from ProjectEuler.net
*/

//My solution
    using System;

    public class Kata
    {
      public static int GetNumber(string str)
      {
          int result = 0;
          for(int i=0; i < str.Length-4;i++){
              int num1 = Int32.Parse(str.Substring(i,5));
              result = num1 > result ? num1 : result;
          }
          return result;
      }
    }

//Solution(s) I like(links):
//1) Best(8) and Clever(23) https://www.codewars.com/kata/reviews/599bc7a37df36852ac001403/groups/59a9b5c31dd9ce00c100090f
    using System.Linq;
    public static int GetNumber(string str)
    {
      return Enumerable.Range(0, str.Length - 4).Select(i => Convert.ToInt32(str.Substring(i, 5))).ToList().Max();
    }
//2) Best(5) and Clever(3) https://www.codewars.com/kata/reviews/599bc7a37df36852ac001403/groups/5a0deb0a9b35d29302003d54
    using System.Linq;
    public class Kata
    {
        public static int GetNumber(string s) => Enumerable.Range(0, s.Length - 4).Max(i => int.Parse(s.Substring(i, 5)));
    }
//3) Clever(25) https://www.codewars.com/kata/reviews/599bc7a37df36852ac001403/groups/599bd29344d75131860005d7
    public static int GetNumber(string str)
    {
      if (str.Length <= 5) { return Int32.Parse(str); }
      return Math.Max(Int32.Parse(str.Substring(0, 5)), GetNumber(str.Substring(1)));
    }
#endregion


#region 7010 Building Strings From a Hash
/*7010 Building Strings From a Hash (https://www.codewars.com/kata/building-strings-from-a-hash/)
Description:
  Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
  The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.
  Example:

    solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

//My solution
    using System;
    using System.Collections.Generic;

    public static class Kata
    {
      public static string StringifyDict<TKey, TValue>(Dictionary<TKey, TValue> hash)
      {
        string result = "";

        foreach(var item in hash)
        {
            result+= item.Key + " = " + item.Value + ",";
        }

        return result.Length>0 ? result.Substring(0, result.Length - 1) : ""; //delete last trailing comma if Length>0

      }
    }
//Solution(s) I like(links):
//1) Best(7) and Clever(3) https://www.codewars.com/kata/reviews/59d4ee809b7699aa7b0007e6/groups/59d543669f28ec5a38003063
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public static class Kata
    {
      public static string StringifyDict<TKey, TValue>(Dictionary<TKey, TValue> hash)
      {
        return string.Join(",", hash.Select(p => $"{p.Key} = {p.Value}"));
      }
    }
#endregion


#region 7011 Substituting Variables Into Strings: Padded Numbers
/*7011 Substituting Variables Into Strings: Padded Numbers (https://www.codewars.com/kata/substituting-variables-into-strings-padded-numbers)
Description:
  Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.
  Example:
    solution(5) # should return "Value is 00005"
*/

//My solution
    public class PaddedNumbers
    {
      public static string Solution(int value)
      {
        string result = value.ToString().PadLeft(5,'0');
        return "Value is " + result ;
      }
    }

//Solution(s) I like(links):
//1) Best(4) https://www.codewars.com/kata/reviews/57b9e3395b446c654e0000fc/groups/593ba048ff5c78163b000041
  public static string Solution(int value)
  {
    return $"Value is {value:D5}";
  }
//2) Clever(1) https://www.codewars.com/kata/reviews/57b9e3395b446c654e0000fc/groups/57bec71e0abd4c84eb000101
    public static string Solution(int value) => "Value is " + value.ToString("00000");

#endregion

#region 7012 Elapsed Seconds
/* 7012 Elapsed Seconds (https://www.codewars.com/kata/elapsed-seconds)
Description:
  Complete the function so that it returns the number of seconds that have elapsed between the start and end times given.
  Tips:
  The start/end times are given as Date (JS/CoffeeScript), DateTime (C#), Time (Nim) and Time (Ruby) instances.
  The start time will always be before the end time.
*/

//My solution
    using System;

    public class Kata
    {
      public static int ElapsedSeconds(DateTime startDate, DateTime endDate)
      {
        return (int) endDate.Subtract(startDate).TotalSeconds;
        //endDate.Subtract(startDate).Hours*3600 + endDate.Subtract(startDate).Minutes*60 + endDate.Subtract(startDate).Seconds;
      }
    }

//Solution(s) I like(links):
//1) Best(2) https://www.codewars.com/kata/reviews/59bf49a5521437125e0015d1/groups/59e8d850f937f9b0d500051c
    public static int ElapsedSeconds(DateTime startDate, DateTime endDate) => (int)(endDate - startDate).TotalSeconds;
#endregion


#region 7013 Return substring instance count
/* 7013 Return substring instance count (https://www.codewars.com/kata/return-substring-instance-count)
Description:
   Complete the solution so that it returns the number of times the search_text is found within the full_text.
    Usage example:
    Kata.SubstringCount("aa_bb_cc_dd_bb_e", "bb") // should return 2 since bb shows up twice
    Kata.SubstringCount("aaabbbccc", "bbb") // should return 1
*/

//My solution
    using System.Text.RegularExpressions;
    public class Kata
    {
      public static int SubstringCount(string fullText, string searchText)
      {
        return Regex.Matches(fullText, searchText).Count;
      }
    }

//Solution(s) I like(links):
//1) Best(4) https://www.codewars.com/kata/reviews/599e3b74de863f82690012e4/groups/599e3b96de863f82690012e9
    using System.Text.RegularExpressions;

    public class Kata
    {
      public static int SubstringCount(string fullText, string searchText) =>
        new Regex(searchText).Matches(fullText).Count;
    }
//2) Clever(1) https://www.codewars.com/kata/reviews/599e3b74de863f82690012e4/groups/5ac907f87245a125ed0004c6
    public static int SubstringCount(string text, string str)
    {
        return (text.Length - text.Replace(str, "").Length) / str.Length;
    }
#endregion


#region 7014 Remove anchor from URL
/* 7014 Remove anchor from URL (https://www.codewars.com/kata/remove-anchor-from-url)
Description:
  Complete the function/method so that it returns the url with anything after the anchor (#) removed.

  Examples:
  Kata.RemoveUrlAnchor("www.codewars.com#about") => "www.codewars.com"
  Kata.RemoveUrlAnchor("www.codewars.com?page=1") => "www.codewars.com?page=1"
*/

//My solution
    public static class Kata
    {
      public static string RemoveUrlAnchor(string url)
      {
        int index = url.IndexOf('#');
        return index > 0 ? url.Substring(0, index) : url;
      }
    }

//Solution(s) I like(links):
//1) Best(6) and Clever(7) https://www.codewars.com/kata/reviews/59bc2990134e4fb55b000e77/groups/59bc2995134e4fb55b000e7c
    public static string RemoveUrlAnchor(string url)
    {
      return url.Split('#')[0];
    }
//2) Best(2) https://www.codewars.com/kata/reviews/59bc2990134e4fb55b000e77/groups/59fa2b6e4b8a60f5fb002f85
    return url.Substring(0, url.IndexOf("#") < 0 ? url.Length : url.IndexOf("#"));
//3) Clever(1) https://www.codewars.com/kata/reviews/59bc2990134e4fb55b000e77/groups/5b134c8539b9bac2450000be
    using System;
    using System.Text.RegularExpressions;

    public static class Kata
    {
      public static string RemoveUrlAnchor(string url)
      {
        return Regex.Match(url, @"[a-z0-9_/.?=]*(?=#)?").Value;
      }
    }
#endregion

#region 7015 String ends with?
/* 7015 String ends with? (https://www.codewars.com/kata/string-ends-with)
Description:
    Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

    Examples:

    solution('abc', 'bc') // returns true
    solution('abc', 'd') // returns false
*/

//My solution
    public class Kata
    {
      public static bool Solution(string str, string ending)
      {
        return str.EndsWith(ending);
      }
    }

//Solution(s) I like(links):
//1) Clever(2) https://www.codewars.com/kata/reviews/5990b47735fd2f187600011c/groups/59e0d7e89671d847c2000c31
    using System.Linq;
    public class Kata
    {
      public static bool Solution(string str, string ending)
      {
        if(str.Contains(ending) && ending.Last()==str.Last() )
        return true;

        return false;
      }
    }
//2) Clever(2) https://www.codewars.com/kata/reviews/5990b47735fd2f187600011c/groups/59912bc9f98f0e61b60016f1
    public static bool Solution(string str, string ending) => str.EndsWith(ending);
#endregion

#region 7016 Sort arrays - 1
/* 7016 Sort arrays - 1 (https://www.codewars.com/kata/sort-arrays-1)
Description:
  Just a simple sorting usage. Create a function that returns the elements of the input-array in a sorted manner.
*/

//My solution
    using System.Linq;
    public class Kata
    {
      public static string[] SortMe(string[] names)
      {
          //Array.Sort(names);
          //return names;
        return names.OrderBy(x=>x).ToArray();
      }
    }

//Solution(s) I like(links):
//1) https://www.codewars.com/kata/reviews/57ce1c94c96c87c81c000170/groups/59e8d2971172d395cb002591
    using System.Linq;
    public class Kata
    {
      public static string[] SortMe(string[] names) => names.OrderBy(x => x).ToArray();
    }
#endregion
