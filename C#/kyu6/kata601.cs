#region 6001 Time-like string format
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
#endregion

#region 6002 Split Strings
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
#endregion

#region 6003 Round by 0.5 steps
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
#endregion

#region 6004  Multiples of 3 and 5
/*004  Multiples of 3 and 5 (https://www.codewars.com/kata/multiples-of-3-and-5/csharp)
 Description:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
    Note: If the number is a multiple of both 3 and 5, only count it once.
*/

//My solution
    public static class Kata
    {
            public static int Solution(int value)
            {
                int sum = 0;
                for (int i = 0; i < value; i++)
                {
                    if (i % 3 == 0 && i % 5 == 0)
                        sum += i;
                    else if (i % 3 == 0)
                        sum += i;
                    else if (i % 5 == 0)
                        sum += i;
                }
                return sum;
            }
    }

//Solution(s) I like:
//1) http://bit.ly/2guWbSo
    public static int Solution(int value)  {
        int max = value - 1;
        int count3 = max / 3;
        int count5 = max / 5;
        int count15 = max / 15;
        return 3 * Sum(count3) + 5 * Sum(count5) - 15 * Sum(count15);
    }

    private static int Sum(int value) {
        return (1 + value) * value / 2;
    }
//2) http://bitly.com/2g1Ot1K The MOST clever by votes, BUT USE MUCH CPU and MEMORY for large numbers
      public static int Solution(int n)  {
        return Enumerable.Range(0, n).Where(e => e % 3 == 0 || e % 5 == 0).Sum();
      }
//3) http://bit.ly/2gaOFiR
       public static int Solution(int value)  {
            var sum = 0;
            for(int i = 3; i < value; i++)
            {
            if(i % 3 == 0 || i % 5 == 0) sum += i;
            }
            return sum;
        }
#endregion

#region 6005 Format words into a sentence
/*005  Format words into a sentence (https://www.codewars.com/kata/format-words-into-a-sentence/csharp)
 Description:
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word
'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored.
Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

    Kata.FormatWords(new string[] {"ninja", "samurai", "ronin"}) => "ninja, samurai and ronin"
    Kata.FormatWords(new string[] {"ninja", "", "ronin"}) => "ninja and ronin"
    Kata.FormatWords(new string[] {}) => ""
*/

//My solution
    using System.Linq;

    public static class Kata
    {
        public static string FormatWords(string[] words)
        {
            string result = "";
            words = words?.Where(x => !string.IsNullOrEmpty(x)).ToArray();//delete empty values

            int size = words?.Length ?? 0;
            if (size > 0)
            {
                for (int i = 0; i <size; i++)
                {
                    if (size==1) { result = words[i]; break; }

                    if (i == size - 1)
                        result += " and " + words[i];
                    else if (i == size - 2)
                        result += words[i];
                    else result += words[i] + ", ";
                }
            }

            return result;
        }
    }

//Solution(s) I like:
//1) http://bit.ly/2gGZztN
    using System.Text.RegularExpressions;
    using System.Linq;
    using System;

    public static class Kata
    {
        public static string FormatWords(string[] words)
        {
            if (words == null || !words.Any()) return "";
            return Regex.Replace(string.Join(", ", words.Where(x => !string.IsNullOrEmpty(x))), ", (?=\\w+$)", " and ");
        }
    }
//2) http://bit.ly/2yM4qnX
    using System;
    using System.Linq;

    public static class Kata
    {
        public static string FormatWords(string[] words)
        {
                if (words == null) return string.Empty;
                    words = words.Where(w => !string.IsNullOrEmpty(w) && w!=null).ToArray();
                    return (words==null || words.Count() == 0) ? string.Empty :
                            words.Count() == 1 ? words[0] :
                            words.Count() == 2 ? string.Join(" and ", words) :
                            $"{string.Join(", ", words.Where(w => !string.IsNullOrEmpty(w) && !w.Equals(words.Last())))} and {words.Last()}";
        }
    }
//3)http://bit.ly/2xHUmre (too long)

#endregion


#region 6006 Reversed Words
/*006  Format words into a sentence (https://www.codewars.com/kata/reversed-words/csharp)
 Description:
Complete the solution so that it reverses all of the words within the string passed in.

Example:
    reverseWords("The greatest victory is that which requires no battle")
    // should return "battle no requires which that is victory greatest The""
*/

//My solution

    using System.Linq;

    public class Kata
    {
        public static string ReverseWords(string str)
        {
            return string.Join(" ", str.Split(' ').Reverse());
        }
    }

//Solution(s) I like:
//1) http://bit.ly/2hRKw0a
  public static string ReverseWords(string str)
  {
    return str.Split().Aggregate( (x , y) => y + " " + x);
  }
//2) http://bit.ly/2ywg4CN
    public static string ReverseWords(string str)  => string.Join(" " ,str.Split(' ').Reverse());
#endregion


#region 6007 Fizz / Buzz
/*6007  Fizz / Buzz (https://www.codewars.com/kata/fizz-slash-buzz/csharp)
 Description:
Write a function that takes an integer and returns an array [A, B, C], where A is the number of multiples of 3 (but not 5) less than the given integer, B is the number of multiples of 5 (but not 3) less than the given integer and C is the number of multiples of 3 and 5 less than the given integer.

For example, solution(20) should return [5, 2, 1]

    # in R, returns a numeric vector
    solution(20)
    [1] 5 2 1

    class(solution(20))
    [1] "numeric"
*/

//My solution
    using System;
    public class Kata
    {
      public static int[] Solution(int number)
      {
          --number;
          int count15= (int)Math.Floor((double)(number /15));
          int count5= (int)Math.Floor((double)(number /5)) - count15;
          int count3= (int)Math.Floor((double)(number /3)) - count15;
          int[] arr = { count3, count5, count15 };

          return arr;
      }
    }

//Solution(s) I like:
//1) Clever(3) https://www.codewars.com/kata/reviews/5990b46a35fd2f187600010a/groups/5990b46e35fd2f187600010e
    public static int[] Solution(int number) => new int[] {--number / 3 - number / 15, number / 5 - number / 15, number / 15};
//2) https://www.codewars.com/kata/reviews/5990b46a35fd2f187600010a/groups/5a6b7d4da9257ec0b100157d
    public static int[] Solution(int number)
    {
      return new int[]
              {
                  Enumerable.Range(1, number - 1).Count(x => x % 3 == 0 && x % 5 != 0),
                  Enumerable.Range(1, number - 1).Count(x => x % 5 == 0 && x % 3 != 0),
                  Enumerable.Range(1, number - 1).Count(x => x % 5 == 0 && x % 3 == 0),
              };
    }
#endregion


#region 6008 Make the Deadfish swim.
/*6008  Make the Deadfish swim. (https://www.codewars.com/kata/make-the-deadfish-swim/csharp)
 Description:
  Write a simple parser that will parse and run Deadfish.
  Deadfish has 4 commands, each 1 character long.
  'i' will increment the value ( initially 0 ).
  'd' will decrement the value.
  's' will square the value.
  'o' will output the value into the return array.
  Invalid characters should be ignored.

    Deadfish.Parse("iiisdoso") => new int[] {8, 64};
*/

//My solution
    using System.Collections.Generic;
    using System.Linq;

    public class Deadfish
    {
      public static int[] Parse(string data)
      {
          // Return the output array, and ignore all non-op characters
          List<int> result = new List<int>();
          var temp = 0;
          for (int index = 0; index < data.Length; index++)
          {
              switch (data[index])
              {
                  case 'i':
                      temp++;
                      break;
                  case 'd':
                      temp--;
                      break;
                  case 's':
                      temp *= temp;
                      break;
                  case 'o':
                      result.Add(temp);
                      break;
                  default:
                      break;
              }
          }

          return result.ToArray();
      }
    }

//Solution(s) I like:
//1) https://www.codewars.com/kata/reviews/5990589f8b984ece79000066/groups/5a7caeb83ef2b952cf001b0f
    using System;
    using System.Collections.Generic;

    public class Deadfish
    {
      public static int[] Parse(string data)
      {
        var accum = 0;
        var list = new List<int>();

        foreach (var c in data.ToCharArray())
        {
          switch (c)
          {
            case 'i':
              accum += 1;
              break;
            case 'd':
              accum -= 1;
              break;
            case 's':
              accum *= accum;
              break;
            case 'o':
              list.Add(accum);
              break;
          }
        }

        return list.ToArray();
      }
    }

#endregion

#region 6009 Title Case
/*6009 Title Case (https://www.codewars.com/kata/title-case)
Description:
  A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

  Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.
  ###Arguments (Other languages)
  1st argument (required): the original string to be converted.
  2nd argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
  ###Example

    Kata.TitleCase("a an the of", "a clash of KINGS")   => "A Clash of Kings"
    Kata.TitleCase("The In", "THE WIND IN THE WILLOWS") => "The Wind in the Willows"
    Kata.TitleCase("the quick brown fox")               => "The Quick Brown Fox"
*/

//My solution
    using System;
    using System.Linq;

    public class Kata
    {
        public static string TitleCase(string title, string minorWords = "")
        {
            if (string.IsNullOrEmpty(title)) return title;

          var mins = string.IsNullOrEmpty(minorWords) ? new string[] { "" } : minorWords.Split(' ').Select(x => x.ToLower()).ToArray();
          var title2 = title.Split(' ').Select(x=> x.ToLower()).ToArray();
            for (int i = 0; i < title2.Length; i++)
            {
                var x = title2[i];
                if (i == 0 || (mins.Length>0 && !mins.Contains(x)))
                    title2[i] = char.ToUpper(x[0]) + x.Substring(1);
            }

            return string.Join(" ", title2);
        }
    }

//Solution(s) I like(links):
//1)Best(5) and Clever(8) https://www.codewars.com/kata/reviews/599a1eaf2e47b4548100050f/groups/59a7201567673bc646000795
    using System;
    using System.Linq;

    public class Kata
    {
      static string FirstToUpper(string input)
      {
        var s = input.ToCharArray();
        s[0] = Char.ToUpper(s[0]);
        return new String(s);
      }

      public static string TitleCase(string title, string minorWords="")
      {
        if (String.IsNullOrEmpty(title)) return title;

        var titleWords = title.Split(' ').Select(w => w.ToLower());
        var minWords = (minorWords ?? "").Split(' ').Select(w => w.ToLower());

        return FirstToUpper(String.Join(" ", titleWords.Select(w => minWords.Contains(w) ? w : FirstToUpper(w))));
      }
    }

//2) Clever(4) https://www.codewars.com/kata/reviews/599a1eaf2e47b4548100050f/groups/59f9e7e14b8a601d65000cb1
    using System.Text.RegularExpressions;

    public class Kata
    {
      public static string TitleCase(string title, string minorWords="")
      {
        return Regex.Replace(title.ToLower(), @"(?<=^|\s" + (string.IsNullOrWhiteSpace(minorWords) ? null : $@"(?!({minorWords.Replace(' ', '|')})(\s|$))") + @")(\w)", a => a.Value.ToUpper(), RegexOptions.IgnoreCase);
      }
    }
#endregion

#region 6010 IP Validation
/* 6010 IP Validation (https://www.codewars.com/kata/ip-validation)
Description:
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0..255 (included).
Input to the function is guaranteed to be a single string.
    Examples
    // valid inputs:
    1.2.3.4
    123.45.67.89
    // invalid inputs:
    1.2.3
    1.2.3.4.5
    123.456.78.90
    123.045.067.089
Note: leading zeros (e.g. 01.02.03.04) are considered not valid in this kata!
*/

//My solution
    using System.Text.RegularExpressions;

    namespace Solution
      {
      class Kata
        {
          public static bool is_valid_IP(string IpAddres)
          {
          // mean 25(0-5) OR 2(0-49) OR (1)0-99 AND end with .(dot)(NOT AT THE END) or end of line ($), use thsi group 4 times
            return Regex.IsMatch(IpAddres, "^((25[0-5]|2[0-4][0-9]|1?[0-9]{1,2})(\\.(?!$)|$)){4}$");
          }
        }
      }

//Solution(s) I like(links):
//1) Best(11) and Clever(19) https://www.codewars.com/kata/reviews/58d0658da7c4e3e3c5000a73/groups/58da2f69540976d03b00055e
    using System.Text.RegularExpressions;
    public static bool is_valid_IP(string IpAddres)
    {
      return Regex.IsMatch(IpAddres, @"^[1-2]?(?<!0)[0-9]{0,2}\.[1-2]?(?<!0)[0-9]{0,2}\.[1-2]?(?<!0)[0-9]{0,2}\.[1-2]?(?<!0)[0-9]{0,2}$");
    }
//2) Best(6) https://www.codewars.com/kata/reviews/58d0658da7c4e3e3c5000a73/groups/58ed0db05876306c00000251
    using System.Text.RegularExpressions;    using System.Net;
    public static bool is_valid_IP(string ipAddress)
    {
        var ipAddressFormat = new Regex(@"(([1-9]\d{0,2})\.){3}([1-9]\d{0,2})");
        IPAddress dummy;
        return
            ipAddressFormat.IsMatch(ipAddress) &&
            System.Net.IPAddress.TryParse(ipAddress, out dummy);
    }
//3) Clever(5) https://www.codewars.com/kata/reviews/58d0658da7c4e3e3c5000a73/groups/59c2644403a9adc72b000ea5
    using System.Net;
    public static bool is_valid_IP(string IpAddres)
    {
          IPAddress ip;
          bool validIp = IPAddress.TryParse(IpAddres, out ip);
          return validIp && ip.ToString()==IpAddres;
    }
#endregion
