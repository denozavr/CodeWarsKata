/* 001 Time-like string format
Description:
Build up a method that takes an integer and formats it to a 'time - like' format.
The method must raise an ArgumentException if its hour length is less than 3 digits and greater than 4.

Example:

    Kata.Solution(800); // should return '8:00'
    Kata.Solution(1000); // should return '10:00'
    Kata.Solution(1451); // should return '14:51'
    Kata.Solution(3351); // should return '33:51'
    Kata.Solution(10000); // should raise an exception
 */

//My solution
    public static string FormatTime(int hour)
    {
        // The hour parameter should be an integer with 3 or 4 digits (i.e. 800)
        if(hour > 9999 || hour <100 ) throw new ArgumentException(); 
        string hourStr = hour.ToString();
        return hourStr.Length > 3 ? hourStr.Substring(0,2) + ":" + hourStr.Substring(2) : hourStr.Substring(0, 1) + ":" + hourStr.Substring(1); 
    }

//Solution(s) I like:
//1)    http://bit.ly/2x3rOYG  
        public static string FormatTime(int hour) {
            if (hour < 100 || hour > 9999) throw new ArgumentException();
            return $"{hour/100}:{hour%100:D02}";
        }
//2)  http://bit.ly/2fEALoX
      public static string FormatTime(int hour) {
        int hours = hour / 100;
        int minutes = hour % 100;
        if (100 <= hours || hours <= 0) { throw new ArgumentException("hour is out of range!"); }
        return $"{hours}:{minutes.ToString().PadLeft(2, '0')}";
      }        



/*002 Split Strings
Description:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:
    SplitString.Solution("abc"); // should return ["ab", "c_"]
    SplitString.Solution("abcdef"); // should return ["ab", "cd", "ef"]
 */

 //My solution
 public class SplitString
{
        public static string[] Solution(string str)
        {
            var half = Math.Ceiling((double) (str.Length/2.0));
            var stringAr = new string[(int) half];
            if (str.Length % 2 == 0)
            {
                for (var i = 0; i < half; i++)
                {
                    stringAr[i] = str.Substring( (i * 1) *2, 2);
                }
            }
            else
            {
                for (var i = 0; i < half; i++)
                {
                    if (i == half-1) stringAr[i] = str.Substring((i * 1) * 2, 1) + "_";
                    else stringAr[i] = str.Substring((i * 1) * 2, 2);
                }
            }
            return stringAr;
        }
}


//Solution(s) I like:
//1)    http://bit.ly/2yiTrCc 
        public static string[] Solution(string str) {
            if (str.Length%2 != 0) str += "_";
            return Enumerable.Range(0, str.Length).Where(x => x%2 == 0)
                   .Select(x => str.Substring(x, 2)).ToArray();
        }
//2)   http://bit.ly/2yEKuiX 
      public static string[] Solution(string s)  {
            if (s.Length % 2 != 0) s += "_";
            return Regex.Matches(s, "([a-zA-Z_]{2})").OfType<Match>().Select(m => m.Value).ToArray();
        }
//3)  http://bit.ly/2xb8Xva 
//4) http://bit.ly/2xTgl1F 


/*003  Round by 0.5 steps
 Description:
Round any given number to the closest 0.5 step
    solution(4.2) = 4
    solution(4.3) = 4.5
    solution(4.6) = 4.5
    solution(4.8) = 5
Round up if number is as close to previous and next 0.5 steps.
    solution(4.75) == 5
   */

//My solution
    using System;

    public class Kata
    {
      public static double Solution(double n)
      {
            double num = n % 1.0 < 0.25 ? 0.0 : n % 1.0 > 0.75 ? 1.0 : 0.5;
            return (int) n + num;
      }
    }

//Solution(s) I like:
//1) http://bit.ly/2g9e2By
    public static double Solution(double n) => Math.Round(n * 2) / 2;
//2) http://bit.ly/2yfsOwI
    public static double Solution(double n)  {
        return Math.Round(2 * n, MidpointRounding.AwayFromZero) / 2;
    }