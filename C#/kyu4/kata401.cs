#region 4001 Roman Numerals Decoder
/* 4001 Roman Numerals Decoder (https://www.codewars.com/kata/roman-numerals-decoder)
Description:
  Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

  Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

    Example:

    RomanDecode.Solution("XXI") -- should return 21
    Help:
    Symbol    Value
    I          1
    V          5
    X          10
    L          50
    C          100
    D          500
    M          1,000
*/

//My solution
    using System;
    using System.Collections.Generic;

    public class RomanDecode
    {
      public static int Solution(string roman)
      {
        int result = 0;
        var nums = new Dictionary<char,int>()
        {
            { 'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            { 'M', 1000}
        };

        for(int i=0; i<roman.Length; i++){
            if (i == roman.Length - 1 || nums[roman[i]] >= nums[roman[i + 1]])
            {
                result += nums[roman[i]];
            }
            else {
                result += nums[roman[i + 1]] - nums[roman[i]];
                i++; //need to increase i, otherwise 2nd number will be added to result
                //for example IV would add 4 and then 5 = 9, without increasing i
            }

        }
        return result;
      }
    }

//Solution(s) I like(links):
//1) BEST(34) AND CLEVER(13) https://www.codewars.com/kata/reviews/55a93313d497aff5a700002e/groups/55a93314d497aff5a7000033
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class RomanDecode
    {
      private static readonly Dictionary<char, int> literals = new Dictionary<char, int>
                                                                {
                                                                  {'I', 1},
                                                                  {'V', 5},
                                                                  {'X', 10},
                                                                  {'L', 50},
                                                                  {'C', 100},
                                                                  {'D', 500},
                                                                  {'M', 1000},
                                                                };

      public static int Solution(string roman)
      {
        int result = 0;
        int max = 0;

        foreach (var c in roman.Reverse())
        {
          int value = literals[c];

          if (value < max)
          {
            result -= value;
          }
          else
          {
            result += value;
            max = value;
          }
        }
        return result;
      }
    }
//2)Clever(71) https://www.codewars.com/kata/reviews/55a93313d497aff5a700002e/groups/56696c09739747d029000062
    using System;
    using System.Linq;

    public class RomanDecode
    {
      public static int Solution(string roman)
        {
            return roman
                .Replace("CM", "DCCCC")
                .Replace("CD", "CCCC")
                .Replace("XC", "LXXXX")
                .Replace("XL", "XXXX")
                .Replace("IX", "VIIII")
                .Replace("IV", "IIII")
                .Sum(c => Translate(c));
        }

        public static int Translate(char c)
        {
            switch (c)
            {
                case 'I': return 1;
                case 'V': return 5;
                case 'X': return 10;
                case 'L': return 50;
                case 'C': return 100;
                case 'D': return 500;
                case 'M': return 1000;
                default: return 0;
            }
        }
    }
//3)Clever(12) https://www.codewars.com/kata/reviews/55a93313d497aff5a700002e/groups/57ce7c78eca260c19100001b
    using System;
    using System.Collections.Generic;
    using System.Linq;
    public class RomanDecode
    {
      private static Dictionary<char,int> _map3 = new Dictionary<char, int>
                {
                    {'I',1},
                    {'V',5},
                    {'X',10},
                    {'L',50},
                    {'C',100},
                    {'D',500},
                    {'M',1000},
                };

            public static int Solution(string roman)
            {
                return roman.Reverse().Aggregate(0, (current, ch) => current + (_map3[ch]*3 < current ? -_map3[ch] : _map3[ch]));
            }
    }

#endregion


#region 4002 Roman Numerals Encoder
/* 4002 Roman Numerals Encoder (https://www.codewars.com/kata/roman-numerals-encoder)
Description:
  Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

  Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

  Example:

  RomanConvert.Solution(1000) -- should return "M"
  Help:

  Symbol    Value
  I          1
  V          5
  X          10
  L          50
  C          100
  D          500
  M          1,000
  Remember that there can't be more than 3 identical symbols in a row.
*/

//My solution
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class RomanConvert
    {
      public static string Solution(int n)
      {
        string result = "";
        var nums = new Dictionary<string,int>()
            {
                { "M", 1000},
                { "CM", 900},
                { "D", 500},
                { "CD", 400},
                { "C", 100},
                { "XC", 90},
                { "L", 50},
                { "XL", 40},
                { "X", 10},
                { "IX", 9},
                { "V", 5},
                { "IV", 4},
                { "I", 1}
            };
        foreach (var val in nums.Keys)
        {
            int times = (int)Math.Floor((double)n / nums[val]); // how many times Roman number occur in Arabian number
            result += string.Concat(Enumerable.Repeat(val, times)); // if >0 add it so many times in result
            n -= nums[val] * times; // substract what used in result from number
        }
        return result;

      }
    }


//Solution(s) I like(links):
//1) BEST(12) AND CLEVER(35) https://www.codewars.com/kata/reviews/58a3ee9c45affb655e000375/groups/58a8efab6123a6dd40000459
    using System;

    public class RomanConvert
    {
      public static string Solution(int n)
      {
      string roman = "";
      string[] thousand = {"","M","MM","MMM"};
      string[] hundred = {"","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"};
      string[] ten = {"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"};
      string[] one = {"","I","II","III","IV","V","VI","VII","VIII","IX"};

      roman += thousand[(n/1000)%10];
      roman += hundred[(n/100)%10];
      roman += ten[(n/10)%10];
      roman += one[n%10];

      return roman;

      }
    }
//2)Best(4) and Clever (4) https://www.codewars.com/kata/reviews/58a3ee9c45affb655e000375/groups/58dd38aae0bcd06bb800086d
    using System;
    using System.Collections.Generic;
    using System.Text;

    public class RomanConvert
    {
      public static string Solution(int n)
      {
        var romeDict = new Dictionary<int, string>()
        {
            [1000] = "M", [900] = "CM", [500] = "D", [400] = "CD",
            [100] = "C", [90] = "XC", [50] = "L", [40] = "XL",
            [10] = "X", [9] = "IX", [5] = "V", [4] = "IV",
            [1] = "I"
        };

        var number = new StringBuilder();
        foreach (var romeNum in romeDict)
        {
            while(romeNum.Key <= n)
            {
                number.Append(romeNum.Value);
                n -= romeNum.Key;
            }
        }

        return number.ToString();
      }
    }
//3) Clever(13) https://www.codewars.com/kata/reviews/58a3ee9c45affb655e000375/groups/593306ee46b5bee9430000be
    using System;

    public class RomanConvert
    {
      public static string Solution(int n)
      {
          var result = new string('I', n);
          return result.Replace(new string('I', 1000), "M")
                      .Replace(new string('I', 900), "CM")
                      .Replace(new string('I', 500), "D")
                      .Replace(new string('I', 400), "CD")
                      .Replace(new string('I', 100), "C")
                      .Replace(new string('I', 90), "XC")
                      .Replace(new string('I', 50), "L")
                      .Replace(new string('I', 40), "XL")
                      .Replace(new string('I', 10), "X")
                      .Replace(new string('I', 9), "IX")
                      .Replace(new string('I', 5), "V")
                      .Replace(new string('I', 4), "IV");
      }
    }
//4) Clever(9)    https://www.codewars.com/kata/reviews/58a3ee9c45affb655e000375/groups/58a43af92ee18113d8000182
  using System;

  public class RomanConvert
  {
    public static string Solution(int n)
      {
          if ((n < 0) || (n > 3999)) throw new ArgumentOutOfRangeException("insert value betwheen 1 and 3999");
          if (n < 1) return string.Empty;
          if (n >= 1000) return "M" + Solution(n - 1000);
          if (n >= 900) return "CM" + Solution(n - 900);
          if (n >= 500) return "D" + Solution(n - 500);
          if (n >= 400) return "CD" + Solution(n - 400);
          if (n >= 100) return "C" + Solution(n - 100);
          if (n >= 90) return "XC" + Solution(n - 90);
          if (n >= 50) return "L" + Solution(n - 50);
          if (n >= 40) return "XL" + Solution(n - 40);
          if (n >= 10) return "X" + Solution(n - 10);
          if (n >= 9) return "IX" + Solution(n - 9);
          if (n >= 5) return "V" + Solution(n - 5);
          if (n >= 4) return "IV" + Solution(n - 4);
          if (n >= 1) return "I" + Solution(n - 1);
          throw new ArgumentOutOfRangeException("something bad happened");
      }
  }
#endregion


#region 4003 Range Extraction
/*4003 Range Extraction (https://www.codewars.com/kata/range-extraction)
Description:
  A format for expressing an ordered list of integers is to use a comma separated list of either individual integers
  or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example ("12, 13, 15-17")
  Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

  Example:
    solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
    // returns "-6,-3-1,3-5,7-11,14,15,17-20"
*/


//My solution
    using System;
    using System.Linq;
    using System.Collections.Generic;

    public class RangeExtraction
    {
        public static string Extract(int[] args)
        {
            var result = new List<String>();
            int start = 0;
            int end = 0;
          for (int i = 0; i < args.Length; i++){
            if (i < args.Length -2 && args[i] - args[i + 2] == -2) { // 3 consequitive numbers 1,2,3 (1-3 = 2)
              start = i; //start index of range
              end = i + 2; //end index of range (could be more)
            for (int j = end ; j <= args.Length-1; j++){
              if (j < args.Length-1 &&  args[j] - args[j + 1] == -1) {
                end = j + 1;
              } else {
                result.Add(args[start]+ "-" + args[end]);
                i = j;
                break;
              }
            }
            } else {
              result.Add(args[i].ToString());
            }
          }
          return string.Join(",", result);
        }
    }


//Solution(s) I like(links):
//1) best(5) and clever(2) https://www.codewars.com/kata/reviews/5a6fbc0a5c03c84a84000ab8/groups/5a7651c46c8e75da54000d16
  using System;
  using System.Collections.Generic;
  using System.Linq;

  public class RangeExtraction
  {
      public int Value, Count;
      public int NextValue => Value + Count;

      public RangeExtraction(int value)
      {
          Value = value;
          Count = 1;
      }

      public override string ToString()
          => Count == 1 ? $"{Value}" :
            Count == 2 ? $"{Value},{Value + 1}" :
                          $"{Value}-{NextValue-1}";

      public static string Extract(int[] args)
      {
          var list = new List<RangeExtraction>();

          foreach (var n in args)
              if (list.LastOrDefault()?.NextValue == n) list.Last().Count++;
              else list.Add(new RangeExtraction(n));

          return string.Join(",", list);
      }
  }
//2) Best(2) https://www.codewars.com/kata/reviews/5a6fbc0a5c03c84a84000ab8/groups/5aa8f84a6fbca547c5006ece
    using System.Collections.Generic;
    using System.Linq;

    public class RangeExtraction
    {
      public static string Extract(int[] args)
      {
        var bufferLists = new List<List<int>>();
        foreach (var i in args.OrderBy(x => x)) {
          var bufferList = bufferLists.FirstOrDefault(l => l.Last() == i-1);
          if (bufferList == null) {
            bufferList = new List<int>();
            bufferLists.Add(bufferList);
          }
          bufferList.Add(i);
        }
        return string.Join(",", bufferLists.Select(l => ListToString(l)));
      }

      private static string ListToString(List<int> list) {
        if (list.Count() <= 2) return string.Join(",",list);
        return $"{list.First()}-{list.Last()}";
      }
    }
#endregion
