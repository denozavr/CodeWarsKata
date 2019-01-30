#region 8001
/* 8001
Description:
The function is not returning the correct values. Can you figure out why?
    getPlanetName(3); // should return 'Earth'
 */

//My solution
    public class Kata
    {
        public static string GetPlanetName(int id)
        {
            string name="";
            switch(id)
            {
                case 1:
                    name = "Mercury";
                    break;
                case 2:
                    name = "Venus";
                    break;
                case 3:
                    name = "Earth";
                    break;
                case 4:
                    name = "Mars";
                    break;
                case 5:
                    name = "Jupiter";
                    break;
                case 6:
                    name = "Saturn";
                    break;
                case 7:
                    name = "Uranus";
                    break;
                case 8:
                    name = "Neptune";
                    break;
            }

            return name;
        }
    }

//Solution(s) I like(links): http://bit.ly/2xGqjDL
#endregion

#region 8002 Square n sum
/*8002 https://www.codewars.com/kata/square-n-sum/csharp
Description:
Complete the squareSum/square_sum/SquareSum method so that it squares each number passed into it and then sums the results together.

For example:
    Kata.SquareSum(new int[] {1, 2, 2}) # should return 9
 */

 //My solution
    public static class Kata
    {
        public static int SquareSum(int[] n)
        {
            int sum = 0;

            foreach (int num in n){
                sum += num*num;
            }
            return sum;
        }
    }

 //Solution(s) I like(links):
    public static int SquareSum(int[] n) => n.Sum(i => i * i); // http://bit.ly/2xuqHG5
    public static int SquareSum(int[] n) => n.Select(x => x * x).Sum(o => o); // http://bit.ly/2xtpyhN
#endregion

#region 8003 How many lightsabers do you own?
/*8003 How many lightsabers do you own?
Description:
Inspired by the development team at Vooza, write the function howManyLightsabersDoYouOwn that

accepts the name of a programmer, and
returns the number of lightsabers owned by that person.
The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

No starting help here -- you'll need to know how to write a function that accepts a parameter and returns a value based on that parameter.

    howManyLightsabersDoYouOwn("anyone else") \\ should === 0
    howManyLightsabersDoYouOwn("Zach") \\ should === 18
 */


//My solution
    public static int HowManyLightsabersDoYouOwn(string name)
    {
        var sabers = 0;
        if(name == "Zach") sabers = 18;
        return sabers;
    }

//Solution(s) I liked:
    public static int HowManyLightsabersDoYouOwn(string name) => name == "Zach" ? 18 : 0;  // http://bit.ly/2xMX0iV
#endregion

#region 8004 Short Long Short
/*8004  Short Long Short (https://www.codewars.com/kata/short-long-short/train/csharp)
 Description:
Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length0).
For example:
    ShortLongShort.Solution("1", "22"); // returns "1221"
    ShortLongShort.Solution("22", "1"); // returns "1221"
*/
//My solution

    public class ShortLongShort
    {
        public static string Solution(string a, string b)
        {
            return a.Length > b.Length ? (b + a + b) : (a + b + a);
        }
    }

//Solution(s) I like:
//1) http://bit.ly/2h41Dfq
    public static string Solution(string a, string b) => (a.Length>b.Length) ? b+a+b : a+b+a;
//2) http://bit.ly/2y1sGTg
      public static string Solution(string a, string b)
      {
         return (b.Length > a.Length) ? $"{a}{b}{a}" : $"{b}{a}{b}";
      }
#endregion

#region 8005 Function 1 - hello world
/*8005 Function 1 - hello world (https://www.codewars.com/kata/function-1-hello-world/train/csharp)
 Description:
  Make a simple function called greet that returns the most-famous "hello world!".
Style Points
  Sure, this is about as easy as it gets. But how clever can you be to create the most creative hello world you can think of?
  What is a "hello world" solution you would want to show your friends?
*/
//My solution
    using System;
    public static class Kata
    {
      // Write a public static method "greet" that returns "hello world!"
      public static string greet() => "hello world";
    }

//Solution(s) I like:
//1) Clever(12) http://bit.ly/2mtCQXs
//2) Clever(10) http://bit.ly/2hzCMne SineWave
//3)
    public static String greet()
    { return "hello world";}
#endregion


#region 8006 Function 2 - squaring an argument
/*8006 Function 2 - squaring an argument https://www.codewars.com/kata/function-2-squaring-an-argument
    Description:
    Now you have to write a function called square that takes an argument and returns the square of it.
*/
//My solution
    public class Kata  {
      public static double Square(double x) => x*x;
    }

//Solution(s) I like:
//1) https://www.codewars.com/kata/reviews/599181e9fab78c44ad0006ea/groups/5a06566bf270a15db00001c7
    public static int Square(int num)
    {
      return num * num;
    }
    public static double Square(double num)
    {
      return num * num;
    }
#endregion

#region 8007 Function 3 - multiplying two numbers
 /*8007 Function 3 - multiplying two numbers https://www.codewars.com/kata/function-3-multiplying-two-numbers
    Description:
    This function has to be called multiply and needs to take two numbers as arguments, and has to return the multiplication of the 2 arguments.
 */

 //My solution
    public static int Multiply(int a, int b) => a*b;

//Solution(s) I like:
//1) BEST(3 Votes) https://www.codewars.com/kata/reviews/59af32238c0e327bff0000bf/groups/59af322b8c0e327bff0000c3
    public static int Multiply(int a, int b)
    {
      if (b == 0 || a == 0) { return 0; }
      if (b == 1) { return a; }
      if (b == -1) { return -a; }

      if (b > 0) { return a + Multiply(a, --b); }
      else { return -a + Multiply(a, ++b); }
    }

 #endregion


#region 8008 Kata Example Twist
 /*8008 Kata Example Twist (https://www.codewars.com/kata/kata-example-twist/csharp)
    Description:
  This is an easy twist to the example kata (provided by Codewars when learning how to create your own kata).
  Add the value "codewars" to the array websites/Websites 1,000 times.

      public static class Kata
      {
        public static string[] Websites;
      }
 */

 //My solution
    using System;
    public static class Kata
    {
      public static string[] Websites = WebsitesCodeWars();

      public static string[] WebsitesCodeWars()
      {
          Websites = new string[1000];
          for (int i = 0; i < Websites.Length; i++) {
              Websites[i] = "codewars";
          }
          return Websites;
      }
    }

//Solution(s) I like:
//1) BEST(9 Votes) https://www.codewars.com/kata/reviews/5991a3ed53fd57051400005e/groups/5991a3ff53fd570514000062
    //!! 5-20 times slower than FOR/While Loops
    public static string[] Websites = Enumerable.Repeat("codewars", 1000).ToArray();
//2) BEST(3) https://www.codewars.com/kata/reviews/5991a3ed53fd57051400005e/groups/59946c2d35939205c600109f
    public static class Kata
    {
      public static string[] Websites = new string[1000];
      static Kata()
      {
        for(int i = 0; i < 1000; i++)
          Websites[i] = "codewars";
      }
    }
//3)
    public static string[] Websites {
        get { return Enumerable.Repeat("codewars", 1000).ToArray(); }
      }
 #endregion


#region 8009 Broken Counter
  /*8009 Broken Counter (https://www.codewars.com/kata/broken-counter/csharp)
    Description:
    Our counter prototype is broken. Can you spot, what's wrong here?
    Counter.Value must have manually defined getter/setter methods, according to our company's style guide.
*/

//My solution
  public class Counter
  {
    private int _value;//add backing field
    public int Value
    {
      get
      {
        return _value; //was Value
      }
      private set
      {
        _value = value; //Was Value=value
      }
    }

    public Counter()
    {
      Value = 0;
    }

    public void Increase()
    {
      ++Value;
    }

    public void Reset()
    {
      Value = 0;
    }
  }

#endregion

#region 8010 Find the Remainder
/*8013 Find the Remainder (https://www.codewars.com/kata/find-the-remainder)
    Description:
    Write a function that accepts two arguments and returns the remainder after dividing the larger number by the smaller number. Division by zero should return NaN (in C#, throw a new DivideByZeroException instead). Arguments will both be integers.
*/

//My solution
    using System;
    public class Kata
    {
      public static int Remainder(int a, int b)
      {
        return a > b ? a%b : b%a;
      }
    }

//Solution(s) I like:
//1) BEST(2 Votes)  https://www.codewars.com/kata/reviews/59af4e4bc311399190000a1f/groups/5a05e88115cd47cee4000f4c
    public static int Remainder(int a, int b) => Math.Max(a, b) % Math.Min(a, b);
//2) https://www.codewars.com/kata/reviews/59af4e4bc311399190000a1f/groups/59af4e51c311399190000a23
    public static int Remainder(int a, int b) =>
    a > b ? a % b : b % a;
//3) https://www.codewars.com/kata/reviews/59af4e4bc311399190000a1f/groups/59b2448f8378092a7c00043b
    public static int Remainder(int a, int b)
    {
      if(Math.Min(a, b) == 0) throw new DivideByZeroException();
      return Math.Max(a, b) % Math.Min(a, b);
    }

#endregion

#region 8011 Convert a Number to a String!
/*8011 Convert a Number to a String! (https://www.codewars.com/kata/convert-a-number-to-a-string)
  Description:
  We need a function that can transform a number into a string.
  What ways of achieving this do you know?
  Examples:
    Kata.NumberToString(123) => "123";
    Kata.NumberToString(999) => "999";
*/

//My solution
    using System;
    public class Kata
    {
      public static string NumberToString(int num)
      {
        return num.ToString();
      }
    }


//Solution(s) I like:
//1) BEST(5 Votes) AND Clever(11) https://www.codewars.com/kata/reviews/5991a8b253fd57e3b60000d9/groups/59946ad83593921b9f00107d
    return $"{num}";
//2) Clever(2) https://www.codewars.com/kata/reviews/5991a8b253fd57e3b60000d9/groups/59927c4ca55ac8ee2a0017da
    public static string NumberToString(int num) => num + "";
//3) https://www.codewars.com/kata/reviews/5991a8b253fd57e3b60000d9/groups/5991cfae2e9e59259700005f
    return Convert.ToString(num);

#endregion


#region 8012 Sleigh Authentication
/** 8012 Sleigh Authentication (https://www.codewars.com/kata/sleigh-authentication/csharp)
Description:
  Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

  Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

    var sleigh = new Sleigh();
    sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE
 */

//My solution
    public class Sleigh
    {
      public static bool Authenticate(string name, string password)
      {
        return name=="Santa Claus" && password == "Ho Ho Ho!";
      }
    }

//Solution(s) I like:
//1) BEST(1 Votes) https://www.codewars.com/kata/reviews/5991af78c015782e8c00000b/groups/59e7720cdaa26373d0002bba
 public static bool Authenticate(string name, string password) => name == "Santa Claus" && password == "Ho Ho Ho!";
//2) Best(1) https://www.codewars.com/kata/reviews/5991af78c015782e8c00000b/groups/5994873335939207b60017fd
    public static bool Authenticate(string name, string password)
    {
      return string.Equals(name, "Santa Claus") && string.Equals(password,  "Ho Ho Ho!");
    }
#endregion

#region 8013 Plural
/* 8013 Plural (https://www.codewars.com/kata/plural/csharp)
Description:
  We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.
    You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).
  All values will be positive integers or floats, or zero.
*/

//My solution
  public class Kata
  {
    public static bool Plural(double n)
    {
      return n!=1;
    }
  }

//Solutions I like:
//1) Best(4) And Clever(1) https://www.codewars.com/kata/reviews/57b5f2a88a36ac1d46000f82/groups/57ccc71fd542d3148f0003aa
    public static bool Plural(double n) => (n != 1);
//2) Clever(1) https://www.codewars.com/kata/reviews/57b5f2a88a36ac1d46000f82/groups/58454e95fc7d0fbc0d000266
    public static bool Plural(double n)
    {
        return Math.Abs(n - 1) > double.Epsilon;
    }
//3)
    public static bool Plural(double n)
    {
      return n!=1?true:false;
    }
#endregion

#region 8014 Welcome to the City
/* 8014 Welcome to the City (https://www.codewars.com/kata/welcome-to-the-city/)
Description:
  Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space betweeen each, and the length of the name array in test cases will vary.
  Example:

    Kata.SayHello(new String[]{"John", "Smith"}, "Phoenix", "Arizona")
  This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!
*/

//My solution
    public class Kata
    {
      public static string SayHello(string[] name, string city, string state)
      {
        return $"Hello, {string.Join(" ", name)}! Welcome to {city}, {state}!";
      }
    }

//Solutions I like:
//1) Best(7) https://www.codewars.com/kata/reviews/599c8dc5aa7911eb11002c58/groups/59e272a92969c5737c0005df
    public static string SayHello(string[] name, string city, string state) =>
    $"Hello, {string.Join(" ", name)}! Welcome to {city}, {state}!";
//2) Best(3) https://www.codewars.com/kata/reviews/599c8dc5aa7911eb11002c58/groups/599d5e2feeb7fbf697000e30
    public static string SayHello(string[] name, string city, string state)
    {
        return String.Format("Hello, {0}! Welcome to {1}, {2}!", String.Join(" ", name), city, state);
    }
#endregion

#region 8015 Convert boolean values to strings 'Yes' or 'No'.
/* 8015 Convert boolean values to strings 'Yes' or 'No'. (https://www.codewars.com/kata/convert-boolean-values-to-strings-yes-or-no)
Description:
    Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
*/

//My solution
    using System;
    using System.Linq;

    public static class Kata
    {
      public static string boolToWord(bool word)
      {
        return word ?  "Yes" : "No";
      }
    }

//Solutions I like:
//1) Best(5) https://www.codewars.com/kata/reviews/5516e34e236c88afb300002c/groups/56fd0402c5957ce7b50008e1
    public static string boolToWord(bool word) => word ? "Yes": "No";
//2)Clever(2) https://www.codewars.com/kata/reviews/5516e34e236c88afb300002c/groups/551712f2236c88ba110003b1
    using System;
    using System.Linq;
    using System.Collections.Generic;

    public static class Kata
    {
      public static string boolToWord(bool word)
      {
        var dict = new Dictionary<bool,string>{{true,"Yes"},{false,"No"}};
        return dict[word];
      }
    }

#endregion

#region 8016 A function within a function
/* 8016 A function within a function (https://www.codewars.com/kata/a-function-within-a-function)
Description:
    Given an input n, write a function always that returns a function which returns n. Ruby should return a lambda or a proc.

      Func<int> three = Kata.Always(3);
      three(); // returns 3
*/

//My solution
    using System;

    public class Kata
    {
      public static Func<int> Always(int n)
      {
        Func<int> innerFunc = () => n; // Func<int> innerFunc = () => {return n;};
        return innerFunc;
      }
}

//Solutions I like:
//1) Best(4) https://www.codewars.com/kata/reviews/5995891e7c6af8db99002934/groups/5995893a7c6af8db9900293a
    public static Func<int> Always(int n) =>
        () => n;
//2) Best(2) https://www.codewars.com/kata/reviews/5995891e7c6af8db99002934/groups/5a066978b908205991000ac5
      public static Func<int> Always(int n)
      {
        Func<int> second = delegate()
        {
          return n;
        };
        return second;
      }
//3) Clever(1) https://www.codewars.com/kata/reviews/5995891e7c6af8db99002934/groups/5a197d6681a2aea9560003d6
    public static Func<int> Always(int n) => delegate() {return n;};
#endregion

#region 8017 Swap Values
/* 8017 Swap Values (https://www.codewars.com/kata/swap-values)
Description:
  I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

  Can you figure out what's wrong here?
*/
//Original code
    public class Swapper
    {
        public object[] Arguments { get; private set; }

        public Swapper(object[] args)
        {
            Arguments = args;
        }

        public void SwapValues()
        {
            object[] args = new[] { Arguments[0], Arguments[1] };

            object temp = args[0];
            args[0] = args[1];
            args[1] = temp;
        }
    }


//My solution
    public class Swapper
    {
        public object[] Arguments { get; private set; }

        public Swapper(object[] args)
        {
            Arguments = args;
        }

        public void SwapValues()
        {
          object[] args = new[] { Arguments[0], Arguments[1] };

            object temp = args[0];
            args[0] = args[1];
            args[1] = temp;

            Arguments = args; //this line solve the error
        }
    }

//Solutions I like:
//1) Best(5) https://www.codewars.com/kata/reviews/57e40912bb57574d00000037/groups/57e40913bb57574d0000003b
    public void SwapValues()
    {
        object temp = Arguments[0];
        Arguments[0] = Arguments[1];
        Arguments[1] = temp;
    }
//2) Clever(3) https://www.codewars.com/kata/reviews/57e40912bb57574d00000037/groups/580a9f9a9be619494a0014a8
    public void SwapValues()
    {
        System.Array.Reverse(Arguments);
    }
//3) Clever(1) https://www.codewars.com/kata/reviews/57e40912bb57574d00000037/groups/5a3d51738ce8c87e04000e63
    using System.Linq;

    public class Swapper
    {
        public object[] Arguments { get; private set; }

        public Swapper(object[] args)
        {
            Arguments = args;
        }

        public void SwapValues()
        {
            Arguments = Arguments.Reverse().ToArray();
        }
    }
//4) Best(1) https://www.codewars.com/kata/reviews/57e40912bb57574d00000037/groups/5977ace1abe74a997100030d
    public void SwapValues()
    {
        object[] args = new[] { Arguments[0], Arguments[1] };

        Arguments[0] = args[1];
        Arguments[1] = args[0];
    }

#endregion

#region 8018 Number toString
/* 8018 Number toString (https://www.codewars.com/kata/number-tostring)
Description:
  The code gives an error!
      Kata.A = 123.ToSTring();
  Fix it!
*/

//My solution
    public class Kata
    {
      public static string A = "123";  //123.ToString();
      //Convert.ToString(123);
    }

//Solutions I like:
//1) Best(3) https://www.codewars.com/kata/reviews/59958b0d7c6af8c3df002959/groups/5aa196db10b783fbe9000f1b
    static int num=123;
    public static string A = num.ToString();
//2) Clever(1) https://www.codewars.com/kata/reviews/59958b0d7c6af8c3df002959/groups/5b3969c2ea182ca0b8000004
    public static string A = 123+"";
#endregion


#region 8019 Are You Playing Banjo?
/* 8019 Are You Playing Banjo? (https://www.codewars.com/kata/are-you-playing-banjo)
Description:
  Create a function which answers the question "Are you playing banjo?".
  If your name starts with the letter "R" or lower case "r", you are playing banjo!
  The function takes a name as its only argument, and returns one of the following strings:

    name + " plays banjo"
    name + " does not play banjo"
  Names given are always valid strings.
*/

//My solution
    using System;

    public class Kata
    {
      public static string AreYouPlayingBanjo(string name)
      {
        var banjoString = (name.Substring(0,1).ToLower() == "r" ?  " plays" : " does not play") + " banjo";
        return name + banjoString;
      }
    }

//Solutions I like:
//1) Best(14) https://www.codewars.com/kata/reviews/55dc9934c50465a0c8000045/groups/55eecf9e00ae4afdfe0000e6
    public static string AreYouPlayingBanjo(string name)
    {
      return string.Format("{0} {1} banjo", name, char.ToLower(name[0]) == 'r' ? "plays" : "does not play");
    }
//2) Best(8) https://www.codewars.com/kata/reviews/55dc9934c50465a0c8000045/groups/55de69cf2a70d7fbe6000011
    public static string AreYouPlayingBanjo(string name)
    {
      return name.ToLower()[0] == 'r' ? name + " plays banjo" : name + " does not play banjo";
    }
//3) Best(2) https://www.codewars.com/kata/reviews/55dc9934c50465a0c8000045/groups/574e0d382be0e277150004f7
    public static string AreYouPlayingBanjo(string name)
    {
      return $"{name} {(name[0] == 'R' || name[0] == 'r')? "plays banjo" : "does not play banjo"}";
    }
#endregion

#region 8019 Grader
/*8019 Grader (https://www.codewars.com/kata/grader)
Description:
  Create a function that takes a number as an argument and returns a grade based on that number.
  Score	Grade
  Anything greater than 1 or less than 0.6	'F'
  0.9 or greater	"A"
  0.8 or greater	"B"
  0.7 or greater	"C"
  0.6 or greater	"D"

  Examples:
    Grader(0.9) == 'A'
    Grader(0.3) == 'F'
    Grader(234) == 'F'
    Grader(0.75) == 'C'
*/

//My solution
    public class Kata
    {
      public static char Grader(double score)
      {
        var result='F';
        if(score < 0.6 || score > 1) result ='F';
        else if(score >= 0.9) result ='A';
        else if(score >= 0.8) result ='B';
        else if(score >= 0.7) result ='C';
        else if(score >= 0.6) result ='D';

        return result;
      }
    }


//Solutions I like:
//1) Best(2) https://www.codewars.com/kata/reviews/59a217edce67ef21c900062b/groups/5ac2985ea0d651bb0c001a19
    public class Kata
    {
      public static char Grader(double score)
      {
        switch ((int)(score*10))
        {
          case 6: return 'D';
          case 7: return 'C';
          case 8: return 'B';
          case 9: return 'A';
          default: return (score == 1.0) ? 'A' : 'F';
        }
      }
    }
//2) CLever(6) https://www.codewars.com/kata/reviews/59a23df987c603320d000996/groups/59aed003981e2954820009f7
    public class Kata
    {
      public static char Grader(double v) => v > 1 || v < 0.6 ? 'F' : v >= 0.9 ? 'A' : v >= 0.8 ? 'B' : v >= 0.7 ? 'C' : 'D';
    }
//4) Best(2) https://www.codewars.com/kata/reviews/59a217edce67ef21c900062b/groups/5bb78432b6dfbb5060002d31
    public class Kata
    {
      public static char Grader(double score)
      {
        return score > 1.0 ? 'F'
            : score >= 0.9 ? 'A'
            : score >= 0.8 ? 'B'
            : score >= 0.7 ? 'C'
            : score >= 0.6 ? 'D'
            : 'F';
      }
    }
#endregion


#region 8020 Even or Odd
/*8020 Even or Odd (https://www.codewars.com/kata/even-or-odd)
Description:
    Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

//My solution
    using System;

    namespace Solution
    {
      public class SolutionClass
      {
        public static string EvenOrOdd(int number)
        {
          return number % 2 == 0 ? "Even" : "Odd";
        }
      }
    }


//Solutions I like:
//1) Best(4) https://www.codewars.com/kata/reviews/5772a0baa95d046e1400018a/groups/5775a295f656b7275d000184
    public class SolutionClass
    {
      public static string EvenOrOdd(int number)
      {
        if(number % 2 == 0)
        {
          return "Even";
        }
        return "Odd";
      }
    }

//2) Clever(12) https://www.codewars.com/kata/reviews/5772a0baa95d046e1400018a/groups/57b013137f75b57c28000217
        public static Func<int,string> EvenOrOdd = (x) => x % 2 == 0 ? "Even" : "Odd";
//3) Clever(11) https://www.codewars.com/kata/reviews/5772a0baa95d046e1400018a/groups/57c002324f5f01ffa70001d9
    public static string EvenOrOdd(int number)
    {
      //return Convert.ToBoolean(number & 1) ? "Odd":"Even";
      return (number & 1) ==  0 ? "Even" :  "Odd"; // return (number & 0x01) > 0 ? "Odd" : "Even";
    }

//4) Clever(7) https://www.codewars.com/kata/reviews/5772a0baa95d046e1400018a/groups/581b7bad9ad9ffe2f500033e
    public static string EvenOrOdd(int number)
    {
      return new string[] {"Even", "Odd"}[number % 2];
    }
//5) Clever(5) https://www.codewars.com/kata/reviews/5772a0baa95d046e1400018a/groups/58b329e96f4276ae300009e9
    using System.Reflection;

    namespace Solution
    {
      public class SolutionClass
      {
          public static string EvenOrOdd(int number)
          {
              var magic = MethodBase.GetCurrentMethod().Name;
              return number % 2 == 0 ? magic.Substring(0, 4) : magic.Substring(6);
          }
      }
    }
#endregion

#region 8021 Reverse List Order
/*8021 Reverse List Order (https://www.codewars.com/kata/reverse-list-order)
Description:
  In this kata you will create a function that takes in a list and returns a list with the reverse order.
  Examples
    Kata.ReverseList(new List<int> {1,2,3,4}) == new List<int> {4,3,2,1};
    Kata.ReverseList(new List<int> {3,1,5,4}) == new List<int> {4,5,1,3};
*/

//My solution
    using System.Collections.Generic;
    using System.Linq;

    public class Kata
    {
      public static List<int> ReverseList(List<int> list)
      {
        return list.Reverse<int>().ToList();
      }
    // public static List<int> ReverseList(List<int> list) => list.AsEnumerable().Reverse().ToList();
    }

//Solutions I like:
//1) Best(11) https://www.codewars.com/kata/reviews/5991c1063c5b647f37000004/groups/5991ee59583995efe0000a0c
    using System.Collections.Generic;
    using System.Linq;

    public class Kata
    {
      public static List<int> ReverseList(List<int> list)
      {
        return Enumerable.Reverse(list).ToList();
      }
    }
//2) Best(3) https://www.codewars.com/kata/reviews/5991c1063c5b647f37000004/groups/5aaff96775d7379961000c4a
    using System.Collections.Generic;

    public class Kata
    {
      public static List<int> ReverseList(List<int> list)
      {
                List<int> yeniDizi = new List<int>();

                for (int i = list.Count - 1; i >= 0; i--)
                {
                    yeniDizi.Add(list[i]);
                }

                return yeniDizi;
      }
    }
#endregion


#region 8022 Sentence Smash
/*8022 Sentence Smash (https://www.codewars.com/kata/sentence-smash)
Description:
  Write a method smash that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

  Example
    Kata.Smash(new string[] {"hello", "world", "this", "is", "great"}) => "hello world this is great";

  Assumptions
  You can assume that you are only given words.
  You cannot assume the size of the array.
  You can assume that you will always get an array.
  What We're Testing
  We're testing basic loops and string manipulation. This is for beginners who are just learning loops and string manipulation.

  Disclaimer
  This is for beginners so we want to test basic loops and string manipulation. Advanced users should easily be able to do this in one line.
*/

//My solution
    public class Kata
    {
      public static string Smash(string[] words)
      {
        return string.Join(" ", words);
      }
    }

//Solutions I like:
//1) Best(16) https://www.codewars.com/kata/reviews/53dc23d121a252d19500007d/groups/53dc48ee2259ed51ef00064b
    using System;

    public class Kata
    {
      public static string Smash(string[] words) =>
        String.Join(" ", words);
    }
#endregion
