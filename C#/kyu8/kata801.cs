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
