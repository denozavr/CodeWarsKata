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
